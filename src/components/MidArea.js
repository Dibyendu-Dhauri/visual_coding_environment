import React, { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import { spriteMotion } from "../features/motionSlice";
import { spriteLooks } from "../features/looksSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MidArea() {
  const data = useSelector((state) => state.motion);

  const [inputvalue, setInputValue] = useState("10");
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
  const myDivElementRef = useRef(null);

  const [sayMsgWithTime, setSayMsgWithTime] = useState("hello!");
  const [sayTime, setSayTime] = useState("2");
  const [sayMsg, setSayMsg] = useState("hello!");
  const [thinkMsgTime, setThinkMsgTime] = useState("hmm..");
  const [thinkTime, setThinkTime] = useState("2");
  const [thinkMsg, setThinkMsg] = useState("hm..");
  const [activeSayTime, setActiveSaytime] = useState(false);
  const [activeThinkTime, setActiveThinkTime] = useState(false);

  useEffect(
    (e) => {
      setInputX(data.x);
      setInputY(data.y);
      setInputXTime(data.x);
      setInputYTime(data.y);
      setChangeXTo(data.x);
      setChangeYTo(data.y);
    },
    [data]
  );
  useEffect(() => {
    const timeId = setTimeout(() => {
      setActiveSaytime(false);
    }, sayTime * 1000);
    return () => clearTimeout(timeId);
  }, [activeSayTime]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setActiveThinkTime(false);
    }, thinkTime * 1000);
    return () => clearTimeout(timeId);
  }, [activeThinkTime]);

  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [duplicateDivId, setDuplicateDivId] = useState("");
  const [draggedItem, setDraggedItem] = useState([]);
  const [dropItem, setDropItem] = useState({});

  // motion data
  const motionData = [
    {
      id: "moveSteps",
      text1: "Move ",
      input1: {
        value: inputvalue,
        onChange: (e) => {
          e.stopPropagation();
          setInputValue(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteMotion({ value: Number(inputvalue), type: "moveforward" })
        );
      },
      text2: " steps",
      draggable: true,
      // onDragStart: handleDragStart,
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
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
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteMotion({
            value: Number(antiRotate),
            type: "rotateAntiClockWise",
          })
        );
      },
      text2: " degrees",
      draggable: true,
      // onDragStart: handleDragStart,
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
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
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteMotion({
            value: Number(rotate),
            type: "rotateClockWise",
          })
        );
      },
      text2: " degrees",
      draggable: true,
      // onDragStart: handleDragStart,
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
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
        onClick: (e) => {
          e.stopPropagation();
        },
        className: "bg-blue-700 text-white rounded-lg mx-1 px-1 outline-none",
      },
      option1: {
        value: "random-position",
        text: "random-position",
      },
      option2: {
        value: "mouse-pointer",
        text: " mouse-pointer",
      },
      onClick: (e) => {
        dispatch(spriteMotion({ type: selectedOption }));
      },
      draggable: true,
      // onDragStart: handleDragStart,
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "goToXandY",
      text1: "go to X: ",
      input1: {
        value: inputX,
        onChange: (e) => {
          setInputX(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      text2: "Y:",
      input2: {
        value: inputY,
        onChange: (e) => {
          setInputY(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteMotion({
            valueX: Number(inputX),
            valueY: Number(inputY),
            type: "goToXandY",
          })
        );
      },
      draggable: true,
      // onDragStart: handleDragStart,
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "moveWithDuration",
      text1: "glide",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: () => {
        dispatch(
          spriteMotion({ value: Number(duration), type: selectedOptionTime })
        );
      },
      input1: {
        className:
          "bg-white text-black w-6 rounded-lg  font-semibold text-center outline-none text-xs",
        value: duration,
        onChange: (e) => {
          setDuration(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      text2: "sec to",
      select1: {
        className:
          "bg-blue-700 text-white rounded-lg  outline-none text-xs w-16",
        value: selectedOption,
        onChange: (e) => {
          setSelectedOptionTime(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      option1: {
        value: "random-position-withDuration",
        text: "random position",
      },
      option2: {
        value: "mouse-pointer-withDuration",
        text: "mouse-pointer",
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "moveWithDurationXandY",
      text1: "glide",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: () => {
        dispatch(
          spriteMotion({
            valueX: Number(inputXTime),
            valueY: Number(inputYTime),
            type: "goToXandYWithTime",
            withDuration: Number(durationXY),
          })
        );
      },
      input1: {
        className:
          "bg-white text-black w-6 rounded-lg font-semibold  text-center outline-none text-xs",
        value: durationXY,
        onChange: (e) => {
          setDurationXY(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      text2: "sec to x:",
      input2: {
        className:
          "bg-white text-black w-8 rounded-lg font-semibold text-center outline-none",
        value: inputXTime,
        onChange: (e) => {
          setInputXTime(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      text3: "Y:",
      input3: {
        className:
          "bg-white text-black w-8 rounded-lg font-semibold text-center outline-none",
        value: inputYTime,
        onChange: (e) => {
          setInputYTime(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "pointToDirection",
      text1: "point in direction",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(
          spriteMotion({ value: Number(direction), type: "pointInDirection" })
        );
      },
      input1: {
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value: direction,
        onChange: (e) => {
          setDirection(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "pointToMousePointer",
      text1: "point towards",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(spriteMotion({ type: "pointInMousePointer" }));
      },
      select1: {
        className:
          "bg-blue-700 text-white rounded-lg ml-1 outline-none text-xs",
      },
      option1: {
        value: "mouse-pointer-withDuration",
        text: "mouse-pointer",
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "changeXBy",
      text1: "change X by",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(spriteMotion({ value: Number(changeXBy), type: "changeXBy" }));
      },
      input1: {
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value: changeXBy,
        onChange: (e) => {
          setChangeXBy(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "setXBy",
      text1: "set x to:",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(spriteMotion({ value: Number(changeXTo), type: "setXBy" }));
      },
      input1: {
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value: changeXTo,
        onChange: (e) => {
          setChangeXTo(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "changeYBy",
      text1: "change y by",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(spriteMotion({ value: Number(changeYBy), type: "changeYBy" }));
      },
      input1: {
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value: changeYBy,
        onChange: (e) => {
          setChangeYBy(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      id: "setYBy",
      text1: "set y to:",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(spriteMotion({ value: Number(changeYTo), type: "setYBy" }));
      },
      input1: {
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
        value: changeYTo,
        onChange: (e) => {
          setChangeYTo(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
    },
    {
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
      id: "sayMsgWithTime",
      text1: "say",
      input1: {
        value: sayMsgWithTime,
        onChange: (e) => {
          setSayMsgWithTime(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none",
      },
      text2: "for",
      input2: {
        value: sayTime,
        onChange: (e) => {
          setSayTime(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteLooks({
            msg: sayMsgWithTime,
            time: Number(sayTime),
            type: "sayMsgWithTime",
            isDisplayed: true,
            isWaiting: true,
          })
        );
        setActiveSaytime(true);
      },
      draggable: true,
      // onDragStart: handleDragStart,
      className: `flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
        activeSayTime ? "border-4 border-yellow-400" : ""
      }`,
    },
    {
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
      id: "sayMsg",
      text1: "say",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(
          spriteLooks({
            msg: sayMsg,
            type: "sayMsg",
            isDisplayed: true,
            isWaiting: false,
          })
        );
      },
      className:
        "flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg",
      input1: {
        type: "text",
        placeholder: "hello",
        className:
          "bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none",
        value: sayMsg,
        onChange: (e) => {
          setSayMsg(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
    },
    {
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
      id: "thinkMsgTime",
      text1: "think",
      input1: {
        value: thinkMsgTime,
        onChange: (e) => {
          setThinkMsgTime(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none",
      },
      text2: "for",
      input2: {
        value: thinkTime,
        onChange: (e) => {
          setThinkTime(e.target.value);
          e.stopPropagation();
        },
        onClick: (e) => {
          e.stopPropagation();
        },
        className:
          "bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none",
      },
      onClick: (e) => {
        dispatch(
          spriteLooks({
            msg: thinkMsgTime,
            time: Number(thinkTime),
            isDisplayed: true,
            isWaiting: true,
            type: "thinkMsgWithTime",
          })
        );
        setActiveThinkTime(true);
      },
      draggable: true,
      // onDragStart: handleDragStart,
      className: `flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
        activeThinkTime ? "border-4 border-yellow-400" : ""
      }`,
    },
    {
      style: {
        position: "absolute",
        left: "",
        top: "",
      },
      id: "thinkMsg",
      text1: "think",
      draggable: true,
      // onDragStart: handleDragStart,
      onClick: (e) => {
        dispatch(
          spriteLooks({
            msg: thinkMsg,
            type: "thinkMsg",
            isDisplayed: true,
            isWaiting: false,
          })
        );
      },
      className:
        "flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg",
      input1: {
        type: "text",
        placeholder: "hello",
        className:
          "bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none",
        value: sayMsg,
        onChange: (e) => {
          setThinkMsg(e.target.value);
        },
        onClick: (e) => {
          e.stopPropagation();
        },
      },
    },
  ];
  const handleDragStart = (e) => {
    const itemById = draggedItem.find((item) => item.id == e.target.id);

    setDropItem(itemById);
    // e.dataTransfer.setData("text/plain", e.target.id);
  };

  const contextMenuStyle = {
    position: "absolute",
    top: contextMenuPosition.y,
    left: contextMenuPosition.x,
    background: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0px 0px 5px #888888",
    padding: "5px",
    zIndex: "1000",
    listStyle: "none",
  };
  function helper(event, draggedElement) {
    const dropX =
      event.clientX - myDivElementRef.current.getBoundingClientRect().left - 60;
    const dropY =
      event.clientY - myDivElementRef.current.getBoundingClientRect().top - 20;

    const itemById = motionData.find((item) => {
      return item.id === draggedElement;
    });

    const updatedItem = {
      ...itemById,
      // id: Math.floor(Math.random() * 1000),
      style: {
        ...itemById.style,
        position: "absolute",
        left: dropX + "px",
        top: dropY + "px",
      },
    };
    setDraggedItem([...draggedItem, updatedItem]);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    // Get the dragged element ID
    const draggedElementId = event.dataTransfer.getData("text/plain");

    if (draggedElementId) {
      helper(event, draggedElementId);
    } else {
      const dropX =
        event.clientX -
        myDivElementRef.current.getBoundingClientRect().left -
        60;
      const dropY =
        event.clientY -
        myDivElementRef.current.getBoundingClientRect().top -
        20;

      const updateData = draggedItem.map((item) => {
        if (item.id == dropItem.id) {
          return {
            ...item,
            style: { ...item.style, top: dropY + "px", left: dropX + "px" },
          };
        }
        return item;
      });
      setDraggedItem(updateData);
    }
  };

  const handleContext = (e) => {
    e.preventDefault();
    if (e.nativeEvent.which === 3) {
      // console.log('Right-clicked!');
      const dropX =
        e.clientX - myDivElementRef.current.getBoundingClientRect().left - 60;
      const dropY =
        e.clientY - myDivElementRef.current.getBoundingClientRect().top - 20;
      setContextMenuPosition({ x: dropX, y: dropY });
      setDuplicateDivId(e.target.id);
    }
  };

  const handleDuplicate = (e) => {
    const dropX =
      e.clientX - myDivElementRef.current.getBoundingClientRect().left - 60;
    const dropY =
      e.clientY - myDivElementRef.current.getBoundingClientRect().top - 20;

    const copied = draggedItem.find((item) => item.id == duplicateDivId);

    const newObj = {
      ...copied,
      // id: Math.floor(Math.random() * 1000),
      style: { ...copied.style, top: dropY + 40 + "px" },
    };
    setContextMenuPosition({
      x: 0,
      y: 0,
    });
    setDraggedItem([...draggedItem, newObj]);
  };

  const handleDelete = (event) => {
    const removeItem = draggedItem.filter((item) => item.id != duplicateDivId);
    setContextMenuPosition({ x: 0, y: 0 });
    setDraggedItem(removeItem);
  };
  const handleClick = (e) => {
    const clickId = e.target.id;

    const findMotionData = motionData.find((item) => item.id == clickId);
    // console.log(findMotionData.onClick())
    findMotionData.onClick();
  };

  return (
    <>
      {" "}
      <div
        className="w-full h-full overflow-auto relative"
        ref={myDivElementRef}
        onDragOver={(e) => {
          e.preventDefault();
          console.log("onDragOver");
        }}
        onDrop={handleDrop}
      >
        {draggedItem.map((divData, index) => {
          const correspondingMotionData = motionData.find(
            (item) => item.id === divData.id
          );
          return (
            // <div
            //   key={index}
            //   className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg relative"
            //   {...divData}
            //   onDragStart={handleDragStart}
            //   onContextMenu={handleContext}
            //   onClick={handleClick}
            // >
            //   {divData.text1}
            //   {divData.icon}
            //   {divData.input1 && <input type="text" {...divData.input1} />}
            //   {divData.select1 && (
            //     <select {...divData.select1}>
            //       {divData.option1 && (
            //         <option
            //           value={divData.option1.value}
            //           onClick={(e) => e.stopPropagation()}
            //         >
            //           {divData.option1.text}
            //         </option>
            //       )}
            //       {divData.option2 && (
            //         <option
            //           value={divData.option2.value}
            //           onClick={(e) => e.stopPropagation()}
            //         >
            //           {divData.option2.text}
            //         </option>
            //       )}
            //     </select>
            //   )}
            //   {divData.text2}
            //   {divData.input2 && <input type="text" {...divData.input2} />}

            //   {divData.text3}
            //   {divData.input3 && <input type="text" {...divData.input3} />}
            // </div>
            <div
              key={index}
              className="flex flex-row items-center flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg relative"
              onDragStart={handleDragStart}
              onContextMenu={handleContext}
              // onClick={handleClick}
              {...correspondingMotionData}
              style={divData.style}
            >
              {correspondingMotionData && (
                <>
                  {correspondingMotionData.text1}
                  {correspondingMotionData.icon}
                  {correspondingMotionData.input1 && (
                    <input type="text" {...correspondingMotionData.input1} />
                  )}
                  {correspondingMotionData.select1 && (
                    <select {...correspondingMotionData.select1}>
                      {correspondingMotionData.option1 && (
                        <option value={correspondingMotionData.option1.value}>
                          {correspondingMotionData.option1.text}
                        </option>
                      )}
                      {correspondingMotionData.option2 && (
                        <option value={correspondingMotionData.option2.value}>
                          {correspondingMotionData.option2.text}
                        </option>
                      )}
                    </select>
                  )}
                  {correspondingMotionData.text2}
                  {correspondingMotionData.input2 && (
                    <input type="text" {...correspondingMotionData.input2} />
                  )}

                  {correspondingMotionData.text3}
                  {correspondingMotionData.input3 && (
                    <input type="text" {...correspondingMotionData.input3} />
                  )}
                </>
              )}
            </div>
          );
        })}

        {"mid area"}
        {contextMenuPosition.x !== 0 && contextMenuPosition.y !== 0 && (
          <ul style={contextMenuStyle}>
            <li onClick={handleDuplicate}>Duplicate Node</li>
            <li onClick={handleDelete}>Delete Node</li>
          </ul>
        )}
      </div>
    </>
  );
}
