"use client";

import { useEffect, useState, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

// Declare the global interface for the webkitSpeechRecognition object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const MainSpeech = () => {
  // State variables
  const [isRecording, setIsRecording] = useState(false); // Indicates if recording is in progress
  const [recordingComplete, setRecordingComplete] = useState(false); // Indicates if recording is complete
  const [transcript, setTranscript] = useState(""); // Stores the transcribed speech

  // Reference to the webkitSpeechRecognition object
  const recognitionRef = useRef<any>(null);

  // Function to start the recording
  const startRecording = () => {
    setIsRecording(true);

    // Create a new instance of webkitSpeechRecognition
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true; // Enable continuous speech recognition
    recognitionRef.current.interimResults = true; // Enable interim results

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      console.log(event.results);
      setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
    console.log("Recording started");
  };

  // Clean up function to stop the recording
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop the recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    console.log("Recording stopped");
    setRecordingComplete(true);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  console.log("Transcript: ", transcript);

  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle>Transcript</CardTitle>

        {(isRecording || transcript) && (
          <div>
            {(isRecording || transcript) && (

                <p className="text-sm text-muted-foreground">
                  {recordingComplete
                    ? "Thanks for talking."
                    : "Start speaking..."}
                </p>

            )}
          </div>
        )}
      </CardHeader>

      <CardContent>{transcript}</CardContent>

      <div className="w-full flex justify-end px-6 mb-6 gap-4">
        <Button onClick={startRecording} className="rounded-full bg-red-500">
          Rec
        </Button>
        <Button onClick={stopRecording} className="rounded-full">
          Stop
        </Button>
      </div>
    </Card>
  );
};

export default MainSpeech;
