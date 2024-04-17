import React, { useState } from "react";
import Seo from "../components/Seo/seo";
import audioSrc from "../data/recommendations/speech_20240417103820216.mp3";


const VoiceChat = () => {
    const [micState, setMicState] = useState('');
    const [transcript, setTranscript] = useState("");
    const [showIntro, setshowIntro] = useState(true);
    const [isListening, setIsListening] = useState(false);
    const [recognitionApp, setrecognitionApp] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();


    const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
        }
        
      };

    const startSpeechRecognition = () => {
        setIsListening(!isListening);
        setshowIntro(false);

        if (isListening == false) {
            const recognition = new window.webkitSpeechRecognition(); // Create SpeechRecognition instance

            recognition.lang = "en-US"; // Set recognition language
            recognition.continuous = true;
            recognition.interimResults = true

            setrecognitionApp(recognition);
            // Event listener for when speech is recognized

            recognition.onresult = event => {
                const resultIndex = event.resultIndex;
                const transcript = event.results[resultIndex][0].transcript;
                setTranscript(transcript);
                setMicState(transcript)
            };
            recognition.start();
        } else {
            setIsPlaying(isPlaying);
            audioRef.current.play();
            recognitionApp.stop();
        }
        // Start speech recognition
    };

    return (
        <>
            <Seo
                title="Talk to AI"
            />
            <main>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                </link>

                    <div className="content-container">
                        <div className="text-center ">
                            <h3 className="listening text-white">
                                {showIntro
                                    ?
                                    <div className="pt-20">

                                        <p>Hey, Masekate Mokotjo </p>

                                        <p>How can I help you?</p>

                                    </div>
                                    :
                                    <div className="pt-10"> <p>{micState}</p>
                                    
                                    </div> 
                                    
                                
                                }

                            </h3>
                            <div className="wave">
                                 <audio ref={audioRef} src={audioSrc}></audio>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center ">
                        <button className={`mic-toggle ${isListening ? 'clicked' : ''}`} id="mic">
                            <span onClick={startSpeechRecognition} className="material-icons">mic</span>
                        </button>

                    </div>

            </main>

        </>
    )
}


export default VoiceChat;