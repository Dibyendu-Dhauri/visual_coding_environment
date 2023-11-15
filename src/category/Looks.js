import React, { useEffect, useState } from "react";
import { spriteLooks } from "../features/looksSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Looks() {
  const dispatch = useDispatch();
  const looksData = useSelector((state) => state.looks);

  const [sayMsgWithTime, setSayMsgWithTime] = useState("hello!");
  const [sayTime, setSayTime] = useState("2");
  const [sayMsg, setSayMsg] = useState("hello!");
  const [thinkMsgTime, setThinkMsgTime] = useState("hmm..");
  const [thinkTime, setThinkTime] = useState("2");
  const [thinkMsg, setThinkMsg] = useState("hm..");
  const [activeSayTime, setActiveSaytime] = useState(false);
  const [activeThinkTime, setActiveThinkTime] = useState(false);
  const [changeSize, setChangeSize] = useState("10");
  const [sizePercentage, setSizePercentage] = useState("100");
  const [changeEffect, setChangeEffect] = useState("random-color");
  const [changeEffectValue, setChangeEffectValue] = useState("25");
  const [effect, setEffect] = useState("set-random-color");
  const [effectValue, setEffectValue] = useState("25");
  
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const looks = [
    {
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
      onDragStart: handleDragStart,
      className: `flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
        activeSayTime ? "border-4 border-yellow-400" : ""
      }`,
    },
    {
      id: "sayMsg",
      text1: "say",
      draggable: true,
      onDragStart: handleDragStart,
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
      onDragStart: handleDragStart,
      className: `flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
        activeThinkTime ? "border-4 border-yellow-400" : ""
      }`,
    },
    {
      id: "thinkMsg",
      text1: "think",
      draggable: true,
      onDragStart: handleDragStart,
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
  const getRandomColor = () => {
    // Generate a random color code
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }

    return newColor;
  };

  return (
    <>
      <div className="font-bold"> {"Looks"} </div>

      {looks.map((divData) => (
        <div
          key={divData.id}
          className="flex flex-row items-center flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg move"
          {...divData}
        >
          {divData.text1}

          {divData.input1 && <input type="text" {...divData.input1} />}

          {divData.text2}
          {divData.input2 && <input type="text" {...divData.input2} />}
        </div>
      ))}
      {/* say hello for 2 sec */}
      {/* <div
        className={`flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
          activeSayTime ? "border-4 border-yellow-400" : ""
        }`}
        onClick={() => {
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
        }}
        id="sayMsgWithTime"
        draggable
        onDragStart={handleDrag}
      >
        {"say"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={sayMsgWithTime}
          onChange={(e) => setSayMsgWithTime(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        {"for"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg mx-2 font-semibold text-center outline-none"
          value={sayTime}
          onChange={(e) => setSayTime(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        {"seconds"}&nbsp;
      </div> */}

      {/* say hello */}
      {/* <div
        className="flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteLooks({
              msg: sayMsg,
              type: "sayMsg",
              isDisplayed: true,
              isWaiting: false,
            })
          )
        }
        id="sayMsg"
        draggable
        onDragStart={handleDrag}
      >
        {"say"}&nbsp;
        <input
          type="text"
          placeholder="hello!"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={sayMsg}
          onChange={(e) => setSayMsg(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div> */}

      {/* think hmm for 2 sec */}
      {/* <div
        className={`flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg ${
          activeThinkTime ? "border-4 border-yellow-400" : ""
        }`}
        onClick={() => {
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
        }}
        id="thinkMsgTime"
        draggable
        onDragStart={handleDrag}
      >
        {"think"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={thinkMsgTime}
          onChange={(e) => setThinkMsgTime(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        {"for"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-8 rounded-lg mx-1 font-semibold text-center outline-none"
          value={thinkTime}
          onChange={(e) => setThinkTime(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        {"seconds"}&nbsp;
      </div> */}

      {/* think hmm */}

      {/* <div
        className="flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteLooks({
              msg: thinkMsg,
              type: "thinkMsg",
              isDisplayed: true,
              isWaiting: false,
            })
          )
        }
        id="thinkMsg"
        draggable
        onDragStart={handleDrag}
      >
        {"think"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={thinkMsg}
          onChange={(e) => setThinkMsg(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div> */}

      {/* switch costume */}
      {/* <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="switchCostume"
        draggable
        onDragStart={handleDrag}
      >
        {"switch costume to"}&nbsp;
        <select className="bg-purple-700 text-white rounded-lg mx-1 px-1 outline-none">
          <option className="text-xs " value="random-position">
            costume1
          </option>
          <option className="text-xs " value="mouse-pointer">
            costume2
          </option>
        </select>
      </div> */}

      {/* next costume */}
      {/* <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        id="nextCostume"
        draggable
        onDragStart={handleDrag}
      >
        {"next costume"}
      </div> */}

      {/* switch backdrop to */}
      {/* <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg">
        {"switch backdrop to"}&nbsp;
        <select className="bg-purple-700 text-white rounded-lg  px-1 outline-none w-20 ">
          <option className="text-xs " value="random-position">
            backdrop1
          </option>
          <option className="text-xs " value="mouse-pointer">
            next backdrop
          </option>
          <option className="text-xs " value="mouse-pointer">
            previous backdrop
          </option>
          <option className="text-xs " value="mouse-pointer">
            random backdrop
          </option>
        </select>
      </div> */}

      {/* next backdrop */}
      {/* <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg">
        {"next backdrop"}
      </div> */}

      {/* change size by 10 */}
      {/* <div
        className="flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteLooks({ size: Number(changeSize), type: "changeSize" })
          )
        }
        id="changeSize"
        draggable
        onDragStart={handleDrag}
      >
        {"change size by"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={changeSize}
          onChange={(e) => setChangeSize(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div> */}

      {/* set size to 100% */}
      {/* <div
        className="flex flex-row items-center flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteLooks({
              size: Number(sizePercentage),
              type: "sizePercentage",
            })
          )
        }
        id="sizePercentage"
        draggable
        onDragStart={handleDrag}
      >
        {"set size to"}&nbsp;
        <input
          type="text"
          className="bg-white text-black w-10 rounded-lg mx-1 font-semibold text-center outline-none"
          value={sizePercentage}
          onChange={(e) => setSizePercentage(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        &nbsp;{"%"}
      </div> */}

      {/* change color effect by 25 */}
      {/* <div
        className="flex flex-row flex-wrap  bg-purple-500 text-white px-1 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(
            spriteLooks({
              color: getRandomColor(),
              type: changeEffect,
              value: Number(changeEffectValue),
            })
          )
        }
        id="changeEffect"
        draggable
        onDragStart={handleDrag}
      >
        {"change"}&nbsp;
        <select
          className="bg-purple-700 text-white rounded-lg  p outline-none w-14"
          value={changeEffect}
          onChange={(e) => setChangeEffect(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          <option className="text-xs " value="random-color">
            color
          </option>

          <option className="text-xs " value="brightness">
            brightness
          </option>
          <option className="text-xs " value="ghost">
            ghost
          </option>
        </select>
        {"effect by"}
        <input
          type="text"
          placeholder="25"
          className="bg-white text-black w-6 rounded-lg mx-1 font-semibold text-center outline-none"
          value={changeEffectValue}
          onChange={(e) => setChangeEffectValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div> */}

      {/* set color effect to */}
      {/* <div
        className="flex flex-row flex-wrap  bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(spriteLooks({ value: Number(effectValue), type: effect }))
        }
        id="effect"
        draggable
        onDragStart={handleDrag}
      >
        {"set"}&nbsp;
        <select
          className="bg-purple-700 text-white rounded-lg  p outline-none"
          value={effect}
          onChange={(e) => setEffect(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          <option className="text-xs " value="set-random-color">
            color
          </option>

          <option className="text-xs " value="set-brightness">
            brightness
          </option>
          <option className="text-xs " value="set-ghost">
            ghost
          </option>
        </select>
        {"effect to"}
        <input
          type="text"
          placeholder="25"
          className="bg-white text-black w-8 rounded-lg mx-1 font-semibold text-center outline-none"
          value={effectValue}
          onChange={(e) => setEffectValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div> */}

      {/* clear graphics effects */}
      {/* <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(spriteLooks({ type: "clear-graphics-effects" }))
        }
        id="clear-graphics-effects"
        draggable
        onDragStart={handleDrag}
      >
        {"clear graphics effects"}
      </div> */}

      {/* show */}
      {/* <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() =>
          dispatch(spriteLooks({ isShowed: true, type: "visible" }))
        }
        id="visible"
        draggable
        onDragStart={handleDrag}
      >
        {"show"}
      </div> */}

      {/* hide */}
      {/* <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg"
        onClick={() => dispatch(spriteLooks({ isShowed: false, type: "hide" }))}
        id="hide"
        draggable
        onDragStart={handleDrag}
      >
        {"hide"}
      </div> */}

      {/* got to fron layer */}
      {/* <div className="flex flex-row flex-wrap  bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg">
        {"got to"}&nbsp;
        <select className="bg-purple-700 text-white rounded-lg  p outline-none">
          <option className="text-xs " value="random-position">
            front
          </option>
          <option className="text-xs " value="mouse-pointer">
            back
          </option>
        </select>
        &nbsp;{"layer"}
      </div> */}

      {/* go forward 1 layer */}
      {/* <div className="flex flex-row flex-wrap  bg-purple-500 text-white px-2 py-1 my-2 text-xs cursor-pointer rounded-lg">
        {"go"}&nbsp;
        <select className="bg-purple-700 text-white rounded-lg  p outline-none">
          <option className="text-xs " value="random-position">
            forward
          </option>
          <option className="text-xs " value="mouse-pointer">
            backward
          </option>
        </select>
        <input
          type="text"
          placeholder="1"
          className="bg-white text-black w-8 rounded-lg mx-1 font-semibold text-center outline-none"
        />
        &nbsp;{"layer"}
      </div> */}
      {/* checkbox */}
      {/* <div className="text-xs my-4 flex flex-col justify-between">
        <label>
          <input
            type="checkbox"
            name="direction"
            id="directionCheckbox"
            checked={looksData.displaySize}
            onChange={() => dispatch(spriteLooks({ type: "displaySize" }))}
          />{" "}
          <span
            className="bg-purple-500 rounded-lg text-white p-1 ml-2"
            id="size"
            draggable
            onDragStart={handleDrag}
          >
            size
          </span>
        </label>
        <br />
      </div> */}
    </>
  );
}
