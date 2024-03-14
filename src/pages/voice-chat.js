import React, { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo/seo";
import { ReactMediaRecorder } from 'react-media-recorder';
import aiVoice from "../images/AIVoice.gif";
import { API_ROOT } from "gatsby-env-variables";


const PremiumPage = () => {
    const [gifVisible, setGifVisible] = useState(false);
    const toggleGif = () => {
        setGifVisible(!gifVisible);
    }

    const [isRecording, setIsRecording] = useState(false);
    const toggleMic = () => {
        setIsRecording(!isRecording)
    };

    async function handleSubmit(mediaUrl) {
        console.log(mediaUrl);

        const audioBlob = await fetch(mediaUrl).then((r) => r.blob());
        console.log(audioBlob);
        const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
      

        let bodyFormData = new FormData();
        bodyFormData.append("client_speech", audioFile);
        bodyFormData.append("session_id", "");

        console.log(API_ROOT + "/stt");

        let submit = await fetch(API_ROOT + "/stt", {
            method: "POST",
            body: bodyFormData,
            headers: {
              'content-type': 'multipart/form-data'
            }
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });

        console.log(submit);
       
    }

    useEffect(() => {
        console.log("Effects:" + isRecording);

        if (isRecording == false) {

        } else {

        }

    }, [isRecording]);
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
                                    ? <div className="pt-20"> <p>listening...</p></div>
                                    :
                                    <div className="pt-20">
                                        <p>Hey, Tatolo</p>

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
                                        } else {
                                            stopRecording();
                                            handleSubmit(mediaBlobUrl);
                                        }
                                    }} className="material-icons">mic</span>
                                </button>
                                {mediaBlobUrl && (
                                    <audio hidden src={mediaBlobUrl} controls autoPlay />
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