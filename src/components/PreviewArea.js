import React, { useState, useEffect, useRef } from "react";
import CatSprite from "./CatSprite";
import { useDispatch, useSelector } from "react-redux";
import { spriteMotion } from "../features/motionSlice";
import Msg from "../category/Msg";

export default function PreviewArea() {
  const motionData = useSelector((state) => state.motion);
  const looksData = useSelector((state) => state.looks);
  const dispatch = useDispatch();
  const parentDivRef = useRef(null);

  useEffect(() => {
    dispatch(
      spriteMotion({
        previewAreaWidth: parentDivRef.current.clientWidth - 100,
        previewAreaHeight: parentDivRef.current.clientHeight - 100,
        type: "parentDivRef",
      })
    );
  }, []);
  const handleDragEnd = (e) => {
    e.preventDefault();
    dispatch(
      spriteMotion({
        valueX:
          e.clientX -
          Math.floor(parentDivRef.current.getBoundingClientRect().left + 50),
        valueY:
          e.clientY -
          Math.floor(parentDivRef.current.getBoundingClientRect().top + 50),
        type: "dragValue",
      })
    );
  };
  return (
    <div
      ref={parentDivRef}
      className="flex-none  h-full w-full  p-2 bg-blue-300 relative"
      onDragOver={(e) => {
        e.preventDefault();
        console.log("onDragOver");
      }}
      onDrop={handleDragEnd}
    >
      {motionData.displayXPos && (
        <div className="bg-blue-200 text-sm font-semibold w-1/2 p-1 m-2 rounded-lg absolute top-2">
          {"Sprite 1: x position"}
          <p className="bg-blue-400 ml-4 w-12 inline-block rounded-lg text-center">
            {motionData.x}
          </p>
        </div>
      )}
      {motionData.displayYPos && (
        <div className="bg-blue-200 text-sm font-semibold w-1/2 p-1 m-2 rounded-lg absolute top-10">
          {"Sprite 1: y position"}
          <p className="bg-blue-400 ml-4 w-12 inline-block rounded-lg text-center">
            {motionData.y}
          </p>
        </div>
      )}
      {motionData.displayDirection && (
        <div className="bg-blue-200 text-sm font-semibold w-1/2 p-1 m-2 rounded-lg absolute top-20">
          {"Sprite 1: direction"}
          <p className="bg-blue-400 ml-6 w-12 inline-block rounded-lg text-center">
            {motionData.degree}
          </p>
        </div>
      )}

      {looksData.displaySize && (
        <div className="bg-blue-200 text-sm font-semibold w-1/3 p-1 m-2 rounded-lg absolute right-0 top-24">
          {"Sprite 1: size"}
          <p className="bg-blue-400 ml-4 w-12 inline-block rounded-lg text-center">
            {looksData.size}
          </p>
        </div>
      )}

      <CatSprite parentDivRef={parentDivRef} />
      {/* <Msg/> */}
    </div>
  );
}
