import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { spriteMotion } from "../features/motionSlice";
// import { motionData } from "../data/motionData";

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
    // console.log(e.target.id)
  };

  const motionData = [
    {
      id: "moveSteps",
      text1: "Move ",
      input1: {
         value:value,
        onChange: (e) => {
          e.stopPropagation();
          setValue(e.target.value);
        },
        onClick:(e)=>{
          e.stopPropagation();
        },
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
      },
      onClick: (e)=>{
        dispatch(spriteMotion({ value: Number(value), type: "moveforward" }))
      },
      text2: " steps",
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id: "antiRotate",
      text1: "Turn ",
      icon: <Icon name="undo" size={15} className="text-white mx-2" />,
      input1: {
        value: antiRotate,
        onChange: (e) => {
          e.stopPropagation();
          setAntiRotate(e.target.value);
        },
        onClick:(e)=>{
           e.stopPropagation();
        },
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e)=>{
        dispatch(
          spriteMotion({
            value: Number(antiRotate),
            type: "rotateAntiClockWise",
          })
        )
      },
      text2: " degrees",
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id: "rotate",
      text1: "Turn ",
      icon: <Icon name="redo" size={15} className="text-white mx-2" />,
      input1: {
        value: rotate,
        onChange: (e) => {
          e.stopPropagation();
          setRotate(e.target.value);
        },
        onClick:(e)=>{
          e.stopPropagation();
        },
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
      },
      onClick: (e)=>{
        dispatch(
          spriteMotion({
            value: Number(rotate),
            type: "rotateClockWise",
          })
        )
      },
      text2: " degrees",
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id: "selectedOption",
      text1: "go to ",
      select1: {
        value: selectedOption,
        onChange: (e) => {
          e.stopPropagation();
          setSelectedOption(e.target.value);
        },
        onClick:(e)=>{
          e.stopPropagation();
        },
        className:"bg-blue-700 text-white rounded-lg mx-1 px-1 outline-none",

      },
      option1:{
        value:"random-position",
          text: 'random-position',
      },
      option2:{
        value:"mouse-pointer",
        text: ' mouse-pointer',
      },
      onClick:(e)=>{
        dispatch(spriteMotion({ type: selectedOption }))
      },
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id:"goToXandY",
      text1:'go to X: ',
      input1:{
        value:inputX,
        onChange:(e)=>{
          setInputX(e.target.value);
        },
        onClick:(e)=>{
          e.stopPropagation()
        },
        className:'bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none',
      },
      text2:'Y:',
      input2:{
        value:inputY,
        onChange:(e)=>{
          setInputY(e.target.value);
        },
        onClick:(e)=>{
          e.stopPropagation()
        },
        className:'bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none'
      },
      onClick:(e)=>{
        dispatch(
          spriteMotion({
            valueX: Number(inputX),
            valueY: Number(inputY),
            type: "goToXandY",
          })
        )
      },
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id:'moveWithDuration',
      text1:'glide',
      draggable: true,
      onDragStart: handleDragStart,
      onClick:()=>{
        dispatch(
          spriteMotion({ value: Number(duration), type: selectedOptionTime })
        )
      },
      input1:{
        type:'text',
        className:"bg-white text-black w-6 rounded-lg  font-semibold text-center outline-none text-xs",
        value:duration,
        onChange:(e)=>{
          setDuration(e.target.value);
          e.stopPropagation();
        },
        onClick:(e)=>{
          e.stopPropagation();
        },
      },
      text2:"sec to",
      select1:{
        className:"bg-blue-700 text-white rounded-lg  outline-none text-xs w-16",
        value:selectedOption,
        onChange:(e)=>{
          setSelectedOptionTime(e.target.value);
          e.stopPropagation();
        },
        onClick:(e)=>{
          e.stopPropagation()
        },
      },
      option1:{
        value:'random-position-withDuration',
        text:'random position'
      },
      option2:{
        value:'mouse-pointer-withDuration',
        text:"mouse-pointer"
      },
    },
    {
      id:"moveWithDurationXandY",
      text1:"glide",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:()=>{
        dispatch(
          spriteMotion({
            valueX: Number(inputXTime),
            valueY: Number(inputYTime),
            type: "goToXandYWithTime",
            withDuration: Number(durationXY),
          })
        )
      },
      input1:{
        className:'bg-white text-black w-6 rounded-lg font-semibold  text-center outline-none text-xs',
        value:durationXY,
        onChange:(e)=>{
          setDurationXY(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        },

      },
      text2:"sec to x:",
      input2:{
        className:"bg-white text-black w-8 rounded-lg font-semibold text-center outline-none",
        value:inputXTime,
        onChange:(e)=>{
          setInputXTime(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        }
      },
      text3:"Y:",
      input3:{
        className:"bg-white text-black w-8 rounded-lg font-semibold text-center outline-none",
        value:inputYTime,
        onChange:(e)=>{
          setInputYTime(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        }
      }
    },
    {
      id:"pointToDirection",
      text1:"point in direction",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(
          spriteMotion({ value: Number(direction), type: "pointInDirection" })
        )
      },
      input1:{
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value:direction,
        onChange:(e)=>{
          setDirection(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        }
      }
    },
    {
      id:"pointToMousePointer",
      text1:"point towards",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(spriteMotion({ type: "pointInMousePointer" }))
      },
      select1:{
        className:"bg-blue-700 text-white rounded-lg ml-1 outline-none text-xs"
      },
      option1:{
        value:"mouse-pointer-withDuration",
        text:"mouse-pointer"
      }
    },
    {
      id:"changeXBy",
      text1:"change X by",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(
          spriteMotion({ value: Number(changeXBy), type: "changeXBy" })
        )
      },
      input1:{
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value:changeXBy,
        onChange:(e)=>{
          setChangeXBy(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        }
      }
    },
    {
      id:"setXBy",
      text1:"set x to:",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(spriteMotion({ value: Number(changeXTo), type: "setXBy" }))
      },
      input1:{
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value:changeXTo,
        onChange:(e)=>{
          setChangeXTo(e.target.value)
        },
        onClick:(e)=>{e.stopPropagation()}
      }
    },
    {
      
      id:"changeYBy",
      text1:"change y by",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(
          spriteMotion({ value: Number(changeYBy), type: "changeYBy" })
        )
      },
      input1:{
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value:changeYBy,
        onChange:(e)=>{
          setChangeYBy(e.target.value)
        },
        onClick:(e)=>{
          e.stopPropagation();
        }
      }
    },
    {
      
      id:"setYBy",
      text1:"set y to:",
      draggable:true,
      onDragStart:handleDragStart,
      onClick:(e)=>{
        dispatch(spriteMotion({ value: Number(changeYTo), type: "setYBy" }))
      },
      input1:{
        className:"bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value:changeYTo,
        onChange:(e)=>{
          setChangeYTo(e.target.value)
        },
        onClick:(e)=>{e.stopPropagation()}
      }
    }
  ]
  
  return (
    <>
      <div className="font-bold"> {"Motion"} </div>
     
      {motionData.map((divData) => (
        <div
          key={divData.id}
          className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg move"
          {...divData}
        >
          {divData.text1}
          {divData.icon}
          {divData.input1 && (
          <input
            type="text"
            {...divData.input1}
            
          />
          )}
          {divData.select1 && (
            <select {...divData.select1}>
            {divData.option1 && (

              <option  value={divData.option1.value} 
              onClick={(e)=>e.stopPropagation()}>
                {divData.option1.text}
              </option>
            )}
            {divData.option2 && (

              <option  value={divData.option2.value}
              onClick={(e)=>e.stopPropagation()}>
                {divData.option2.text}
              </option>
            )}
           
            </select>
          )}
          {divData.text2}
          {divData.input2 && (
          <input
            type="text"
            {...divData.input2}
            
          />
          )}

          {divData.text3}
          {divData.input3 && (
          <input
            type="text"
            {...divData.input3}
            
          />
          )}

        </div>
      ))}


      
     

      {/* <div
        className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => dispatch(spriteMotion({ type: "edgeBounce" }))}
        id="edgeBounce"
        draggable
        onDragStart={handleDragStart}
      >
        {"if on edge,bounce"}
      </div> */}

      {/* <div
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
      </div> */}

      {/* <div className="text-xs my-4 flex flex-col justify-between">
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
      </div> */}
    </>
  );
}
