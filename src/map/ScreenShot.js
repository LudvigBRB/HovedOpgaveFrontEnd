import React, { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function ScreenShot() {
  window.onload = function () {
    let button1 = document.querySelector("#button1");

    button1.addEventListener("mouseup", logMouseButton);

    let button2 = document.querySelector("#button2");
    button2.addEventListener("mouseup", logMouseButton);

    let log = document.querySelector("#log");

    function logMouseButton(e) {
      if (typeof e === "object") {
        switch (e.button) {
          case 0:
            takeScreenShot();
            //changeText1();
            console.log(e.button);
            break;
          case 1:
            changeText2();
            break;
          case 2:
            log.textContent = "Right button clicked.";
            break;
          default:
            log.textContent = `Unknown button code: ${e.button}`;
        }
      }
    }

    function takeScreenShot() {
      html2canvas(document.body).then((canvas) => {
        document.body.appendChild(canvas);
      });
    }

    function changeText1() {
      //evt.preventDefault();
      log.textContent = "Left button clqwefqeficked.";
    }

    function changeText2() {
      log.textContent = "Leflqwefqewegwegwerergergeficked.";
    }
  };

  return (
    <div>
      <button id="button1" oncontextmenu="event.preventDefault();">
        Click here with your mouse...
      </button>
      <button id="button2" oncontextmenu="event.preventDefault();">
        Click here with your mouse...
      </button>
      <p id="log"></p>
    </div>
  );
}

export default ScreenShot;
