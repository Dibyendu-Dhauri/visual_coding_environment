import React, { useEffect, useState } from "react";

export default function Events() {
  const [dragElement, setDragElement] = useState([""]);
  const eventsContainer = document.getElementById("eventsContainer");

  const handleDragStart = (e) => {
    setDragElement([...dragElement, e.target.id]);

    e.dataTransfer.setData("text/plain", e.target.id);
  };

  return (
    <>
      <div className="font-bold"> {"Events"} </div>

      <div
        id="eventsContainer"
        className="h-auto overflow-y-auto flex flex-col items-start"
      ></div>

      <div
        className={`flex flex-row items-center flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg `}
        id="whenClicked"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"When Clicked"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="whenKeyPress"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"when"}&nbsp;
        <select className="bg-yellow-700 text-white rounded-lg mx-1 px-1 outline-none">
          <option className="text-xs " value="random-position">
            space
          </option>
          <option className="text-xs " value="mouse-pointer">
            up arrow
          </option>
          <option className="text-xs " value="mouse-pointer">
            down arrow
          </option>
          <option className="text-xs " value="mouse-pointer">
            right arrow
          </option>
          <option className="text-xs " value="mouse-pointer">
            left arrow
          </option>
          <option className="text-xs " value="mouse-pointer">
            any
          </option>
        </select>
        {"key pressed"}
      </div>

      <div
        className={`flex flex-row items-center flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg `}
        id="spriteClicked"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"When this sprite Clicked"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="backdropSwitches"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"when backdrop switches to"}
        <select className="bg-yellow-700 text-white rounded-lg  px-1 outline-none w-18">
          <option className="text-xs " value="random-position">
            backdrop1
          </option>
        </select>
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="loudnessTimer"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"when"}&nbsp;
        <select className="bg-yellow-700 text-white rounded-lg mx-1 px-1 outline-none">
          <option className="text-xs " value="random-position">
            loudness
          </option>
          <option className="text-xs " value="random-position">
            timer
          </option>
        </select>
        {">"}
        <input
          type="text"
          placeholder="10"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
        />
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="receiveMsg"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"when I receive"}&nbsp;
        <select className="bg-yellow-700 text-white rounded-lg mx-1 px-1 outline-none">
          <option className="text-xs " value="random-position">
            message1
          </option>
          <option className="text-xs " value="random-position">
            New message
          </option>
        </select>
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="msgBroadcasting"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"broadcast"}&nbsp;
        <select className="bg-yellow-700 text-white rounded-lg mx-1 px-1 outline-none">
          <option className="text-xs " value="random-position">
            message1
          </option>
          <option className="text-xs " value="random-position">
            New message
          </option>
        </select>
      </div>

      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="broadcastingMsgWithTime"
        draggable={true}
        onDragStart={handleDragStart}
      >
        {"broadcast"}
        <select className="bg-yellow-700 text-white rounded-lg mx-1 px-1 outline-none w-16">
          <option className="text-xs " value="random-position">
            message1
          </option>
          <option className="text-xs " value="random-position">
            New message
          </option>
        </select>
        {"and wait"}
      </div>
    </>
  );
}
