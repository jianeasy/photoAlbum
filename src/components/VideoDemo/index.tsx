import React from "react";

import "./index.module.scss";

export default function VideoDemo() {
  
  return (
    <div>
      <div>
        <video style={{ width: '300px' }} controls>
          <source src="file:///D:/mi8照片/ScreenRecorder/Screenrecorder-2019-11-25-23-45-01-320.mp4" />
        </video>
      </div>

    </div>

  );
}
