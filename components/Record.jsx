import React, { useEffect } from "react";
import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { Web3Storage, File } from "web3.storage";

const RecordView = ({ audio, video, screen }) => {
  const {
    status,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: audio, video: video, screen: screen });
  const [files, setFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const onStop = async () => {
    stopRecording();
    setIsRecording(false);
  };
  useEffect(() => {
    if (window) {
      console.log("HERE");
      async function setter() {
        const token = process.env.WEB3_STORAGE_TOKEN;
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
        const files = [new File([blob], Date.now())];
        console.log(files);
        // const obj = {name:"hello"};
        // const files = [new File([new Blob([JSON.stringify(obj)], {type:"application/json"})], "helloobj")]
        const storage = new Web3Storage({ token });
        const cid = await storage.put(files);
        console.log("Content added with CID:", cid);
        setFiles((prev) => {
          return [...prev, mediaBlobUrl];
        });
      }

      if (mediaBlobUrl && files.indexOf(mediaBlobUrl) === -1) {
      setter();
      }
    }
  }, [mediaBlobUrl, files]);
  return (
    <div className="bg-transparent w-screen z-[10]">
      <div className="bg-transparent w-fit mx-auto p-4 z-[5] text-white overflow-x-hidden">
        <p className="">
          Status: <span className={"uppercase"}>{status}</span>
        </p>

        <button
          disabled={isRecording}
          className={
            `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
          }
          onClick={() => {
            setIsRecording(true);
            startRecording();
          }}
        >

          Start
        </button>
        <button
          // disabled={isRecording}
          className={
            `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
          }
          onClick={resumeRecording}
        >
          Resume
        </button>
        <button
          disabled={!isRecording}
          className={
            `p-2 rounded m-4 ` +
            (!isRecording ? "bg-purple-900" : "bg-purple-500")
          }
          onClick={pauseRecording}
        >
          Pause
        </button>
        <button
          disabled={!isRecording}
          className={
            `p-2 rounded m-4 ` +
            (!isRecording ? "bg-purple-900" : "bg-purple-500")
          }
          onClick={() => onStop()}
        >
          Stop
        </button>
        {/* <button
        // disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => downloadRecording}
      >
        Download Recording
      </button> */}
        {/* {videos.map((url) => {
        return (
          <div> */}
        <div className="flex flex-wrap gap-4">
          {files.map((blobUrl) => {
            return audio ? (
              <audio
                className="max-w-[500px] rounded"
                src={blobUrl}
                downloadrecordingtype="mp3"
                controls
              />
            ) : (
              <video
                className="max-w-[500px] rounded"
                src={blobUrl}
                downloadRecordingPath="Files"
                downloadRecordingType="mp4"
                controls
              />
            );
          })}
        </div>
        {/* </div>
        );
      })} */}
      </div>
    </div>
  );
};
export default RecordView;