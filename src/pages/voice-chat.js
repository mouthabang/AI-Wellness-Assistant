import React, { useState, useEffect, useRef } from "react";
import Seo from "../components/Seo/seo";
import { ReactMediaRecorder } from 'react-media-recorder';
import axios from "axios";
import AWS from 'aws-sdk';
import TranscribeService from "aws-sdk/clients/transcribeservice";


const PremiumPage = () => {
    const [micState, setMicState] = useState('');
    const [gifVisible, setGifVisible] = useState(false);
    const toggleGif = () => {
        setGifVisible(!gifVisible);
    }

    const [isRecording, setIsRecording] = useState(false);
    const toggleMic = () => {
        setIsRecording(!isRecording)
    };

    async function handleSubmit(mediaUrl) {
        const audioBlob = await fetch(mediaUrl).then((r) => r.blob());
        const audioFile = new File([audioBlob], 'inputVoice.wav', { type: 'audio/wav' });
        const AWS = require('aws-sdk');

        // Set the AWS credentials and region
     

        // AWS S3 configuration
        const transcribeService = new TranscribeService();
        const s3 = new AWS.S3();


        // Define parameters for the upload
        const params = {
            Bucket: 'faw2024voicechat',
            Key: audioFile.name,
            Body: audioFile,
            ContentType: 'audio/wav'
        };

        // Upload file to S3 bucket
        s3.upload(params, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File uploaded successfully:', data.Location);
                const paramsAWSTranscribe = {
                    TranscriptionJobName: 'InputJob',
                    LanguageCode: 'en-US',
                    MediaFormat: 'wav',
                    Media: {
                        MediaFileUri: 's3://faw2024voicechat/inputVoice.wav'
                    }
                };
                transcribeService.startTranscriptionJob(paramsAWSTranscribe, (err, data) => {
                    if (err) {
                        console.error(err);
                    } else {
                        if (data.TranscriptionJob.TranscriptionJobStatus == "IN_PROGRESS") {
                            wait_for_transcription_job("InputJob");
                        }
                    }
                });




            }
        });
    }

    function wait_for_transcription_job(job_name) {
        console.log("Starting Waiting for Transcation Job");
        const transcribeService = new TranscribeService();
        transcribeService.getTranscriptionJob({ TranscriptionJobName: job_name }, (err, data) => {
            if (err) {
                console.log('Error getting transcription job status:', err);
            } else {
                var responseStatus = data.TranscriptionJob.TranscriptionJobStatus;
                console.log("Transaction Status:", responseStatus);
                if (responseStatus == 'COMPLETED') {
                    console.log('Transcription COMPLETE:' , data);
                }else if (responseStatus == "IN_PROGRESS") {
                    console.log("Transaction in progress STATUS");
                    setTimeout(() => {
                        console.log("Waiting and trying again...");
                        wait_for_transcription_job(job_name);
                        console.log("Trying again");
                    }, 5000); // Check again after 3 seconds
                }else{
                    console.log(data);
                }

            }

        });
        // transcribeService.startTranscriptionJob(paramsAWSTranscribe, (err, data) => {

    }

    return (
        <>
            <Seo
                title="Talk to AI"
            />
            <main>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                </link>

                <div className="p-5">
                    <div className="content-container">
                        <div className="text-center ">
                            <h3 className="listening text-white">
                                {isRecording
                                    ?
                                    <div className="pt-20"> <p>{micState}</p></div>
                                    :
                                    <div className="pt-20">
                                        <p>Hey, Masekate Mokotjo</p>

                                        <p>How can I help you?</p>
                                    </div>
                                }
                            </h3>

                        </div>

                    </div>
                    <ReactMediaRecorder
                        audio
                        render={({ startRecording, stopRecording, mediaBlobUrl }) => (

                            <div className="flex justify-center items-center ">
                                <button className={`mic-toggle ${isRecording ? 'clicked' : ''}`} id="mic">
                                    <span onClick={() => {
                                        setIsRecording(!isRecording)

                                        if (isRecording == false) {
                                            startRecording();
                                            setMicState("Listening...");
                                        } else {
                                            stopRecording();
                                            setMicState("Converting word to text...")
                                            handleSubmit(mediaBlobUrl);
                                        }
                                    }} className="material-icons">mic</span>
                                </button>
                                {mediaBlobUrl && (
                                    <audio hidden src={mediaBlobUrl} controls />
                                )}

                            </div>

                        )}
                    />
                </div>

            </main>

        </>
    )
}

export default PremiumPage;