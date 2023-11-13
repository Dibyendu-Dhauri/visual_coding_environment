import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { spriteMotion } from "../features/motionSlice";

export default function Motion() {
  const data = useSelector((state) => state.motion);
  const [value, setValue] = useState("10");
  const [rotate, setRotate] = useState("15");
  const [antiRotate, setAntiRotate] = useState("15");
  const [selectedOption, setSelectedOption] = useState("random-position");
  const [selectedOptionTime, setSelectedOptionTime] = useState(
    "random-position-withDuration"
  );
  const [inputX, setInputX] = useState(data.x);
  const [inputY, setInputY] = useState(data.y);
  const [inputXTime, setInputXTime] = useState(data.x);
  const [inputYTime, setInputYTime] = useState(data.y);
  const [changeXTo, setChangeXTo] = useState(data.x);
  const [changeYTo, setChangeYTo] = useState(data.y);
  const [changeXBy, setChangeXBy] = useState("10");
  const [changeYBy, setChangeYBy] = useState("10");
  const [durationXY, setDurationXY] = useState("0");
  const [duration, setDuration] = useState("0");
  const [direction, setDirection] = useState("90");
  const dispatch = useDispatch();

  useEffect(() => {
    setInputX(data.x);
    setInputY(data.y);
    setInputXTime(data.x);
    setInputYTime(data.y);
    setChangeXTo(data.x);
    setChangeYTo(data.y);
  }, [data]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };
  return (
    <>
      <div className="font-bold"> {"Motion"} </div>
      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg move"
        onClick={() =>
          dispatch(spriteMotion({ value: Number(value), type: "moveforward" }))
        }
        id="moveSteps"
        draggable
        onDragStart={handleDragStart}
      >
        {"Move "}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            e.stopPropagation();
            setValue(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
        />
        {" steps"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({
              value: Number(antiRotate),
              type: "rotateAntiClockWise",
            })
          )
        }
        id="antiRotate"
        draggable
        onDragStart={handleDragStart}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <input
          type="text"
          value={antiRotate}
          onChange={(e) => {
            e.stopPropagation();
            setAntiRotate(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
        />
        {" degrees"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => {
          dispatch(
            spriteMotion({ value: Number(rotate), type: "rotateClockWise" })
          );
        }}
        id="rotate"
        draggable
        onDragStart={handleDragStart}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input
          type="text"
          value={rotate}
          onChange={(e) => {
            e.stopPropagation();
            setRotate(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
        />
        {" degrees"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => dispatch(spriteMotion({ type: selectedOption }))}
        id="selectedOption"
        draggable
        onDragStart={handleDragStart}
      >
        {"go to "}
        <select
          className="bg-blue-700 text-white rounded-lg mx-1 px-1 outline-none"
          value={selectedOption}
          onChange={(e) => {
            e.stopPropagation();
            setSelectedOption(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <option className="text-xs " value="random-position">
            random position
          </option>
          <option className="text-xs " value="mouse-pointer">
            mouse-pointer
          </option>
        </select>
      </div>
      {/* goToXandY */}
      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({
              valueX: Number(inputX),
              valueY: Number(inputY),
              type: "goToXandY",
            })
          )
        }
        id="goToXandY"
        draggable
        onDragStart={handleDragStart}
      >
        {"go to X: "}
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={inputX}
          onChange={(e) => {
            setInputX(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        />
        {"Y: "}
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={inputY}
          onChange={(e) => {
            setInputY(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center   flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg "
        onClick={() =>
          dispatch(
            spriteMotion({ value: Number(duration), type: selectedOptionTime })
          )
        }
        id="moveWithDuration"
        draggable
        onDragStart={handleDragStart}
      >
        {"glide"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-6 rounded-lg  font-semibold text-center outline-none text-xs"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        {"sec to"}
        <select
          className="bg-blue-700 text-white rounded-lg  outline-none text-xs w-16 "
          value={selectedOptionTime}
          onChange={(e) => {
            e.stopPropagation();
            setSelectedOptionTime(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <option value="random-position-withDuration">random position</option>
          <option value="mouse-pointer-withDuration">mouse-pointer</option>
        </select>
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({
              valueX: Number(inputXTime),
              valueY: Number(inputYTime),
              type: "goToXandYWithTime",
              withDuration: Number(durationXY),
            })
          )
        }
        id="moveWithDurationXandY"
        draggable
        onDragStart={handleDragStart}
      >
        {"glide"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-6 rounded-lg font-semibold  text-center outline-none text-xs"
          value={durationXY}
          onChange={(e) => setDurationXY(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        &nbsp;{"sec to x:"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg font-semibold text-center outline-none"
          value={inputXTime}
          onChange={(e) => {
            setInputXTime(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        />
        &nbsp;{"y:"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg font-semibold text-center outline-none"
          value={inputYTime}
          onChange={(e) => {
            setInputYTime(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({ value: Number(direction), type: "pointInDirection" })
          )
        }
        id="pointToDirection"
        draggable
        onDragStart={handleDragStart}
      >
        {"point in direction"}&nbsp;
        <input
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => dispatch(spriteMotion({ type: "pointInMousePointer" }))}
        id="pointToMousePointer"
        draggable
        onDragStart={handleDragStart}
      >
        {"point towards"}&nbsp;
        <select className="bg-blue-700 text-white rounded-lg ml-1 outline-none text-xs">
          <option value="mouse-pointer-withDuration">mouse-pointer</option>
        </select>
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({ value: Number(changeXBy), type: "changeXBy" })
          )
        }
        id="changeXBy"
        draggable
        onDragStart={handleDragStart}
      >
        {"change X by"}&nbsp;
        <input
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={changeXBy}
          onChange={(e) => setChangeXBy(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(spriteMotion({ value: Number(changeXTo), type: "setXBy" }))
        }
        id="setXBy"
        draggable
        onDragStart={handleDragStart}
      >
        {"set x to: "}&nbsp;
        <input
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={changeXTo}
          onChange={(e) => setChangeXTo(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteMotion({ value: Number(changeYBy), type: "changeYBy" })
          )
        }
        id="changeYBy"
        draggable
        onDragStart={handleDragStart}
      >
        {"change y by"}&nbsp;
        <input
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={changeYBy}
          onChange={(e) => setChangeYBy(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      {/* set y to */}
      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(spriteMotion({ value: Number(changeYTo), type: "setYBy" }))
        }
        id="setYBy"
        draggable
        onDragStart={handleDragStart}
      >
        {"set y to: "}&nbsp;
        <input
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={changeYTo}
          onChange={(e) => setChangeYTo(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => dispatch(spriteMotion({ type: "edgeBounce" }))}
        id="edgeBounce"
        draggable
        onDragStart={handleDragStart}
      >
        {"if on edge,bounce"}
      </div>

      <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="changeDir"
        draggable
        onDragStart={handleDragStart}
      >
        {"set rotation style"}
        <select className="bg-blue-700 text-white rounded-lg ml-1 outline-none text-xs">
          <option value="mouse-pointer-withDuration">left-right</option>
          <option value="mouse-pointer-withDuration">don't rotate</option>
          <option value="mouse-pointer-withDuration">all around</option>
        </select>
      </div>

      <div className="text-xs my-4 flex flex-col justify-between">
        <label>
          <input
            type="checkbox"
            name="xPosition"
            id="xPositionCheckbox"
            checked={data.displayXPos}
            onChange={() => dispatch(spriteMotion({ type: "displayXPos" }))}
          />{" "}
          <span
            className="bg-blue-500 rounded-lg text-white p-1 ml-2"
            id="xDir"
            draggable
            onDragStart={handleDragStart}
          >
            {" "}
            X Position
          </span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="yPosition"
            id="yPositionCheckbox"
            checked={data.displayYPos}
            onChange={() => dispatch(spriteMotion({ type: "displayYPos" }))}
          />{" "}
          <span
            className="bg-blue-500 rounded-lg text-white p-1 ml-2"
            id="yDir"
            draggable
            onDragStart={handleDragStart}
          >
            {" "}
            Y Position
          </span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="direction"
            id="directionCheckbox"
            checked={data.displayDirection}
            onChange={() =>
              dispatch(spriteMotion({ type: "displayDirection" }))
            }
          />{" "}
          <span
            className="bg-blue-500 rounded-lg text-white p-1 ml-2"
            id="dir"
            draggable
            onDragStart={handleDragStart}
          >
            Direction
          </span>
        </label>
        <br />
      </div>
    </>
  );
}
