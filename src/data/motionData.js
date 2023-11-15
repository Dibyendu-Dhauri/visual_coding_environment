import Icon from "../components/Icon";
import React,{useState} from "react";
const [value, setValue] = useState("10");
const [antiRotate, setAntiRotate] = useState("15");
const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target.id)
  };

export const motionData = [
    {
      id: "moveSteps",
      text: "Move ",
      input: {
        value,
        onChange: (e) => {
          e.stopPropagation();
          setValue(e.target.value);
        },
      },
      unit: " steps",
      draggable: true,
      onDragStart: handleDragStart,
    },
    {
      id: "antiRotate",
      text: "Turn ",
      icon: <Icon name="undo" size={15} className="text-white mx-2" />,
      input: {
        value: antiRotate,
        onChange: (e) => {
          e.stopPropagation();
          setAntiRotate(e.target.value);
        },
      },
      unit: " degrees",
      draggable: true,
      onDragStart: handleDragStart,
    },
  ]