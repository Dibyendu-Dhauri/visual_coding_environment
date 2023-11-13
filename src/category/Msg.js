import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spriteLooks } from "../features/looksSlice";

export default function Msg() {
  const looksData = useSelector((state) => state.looks);
  const dispatch = useDispatch();

  const waitTime = looksData.time * 1000;

  useEffect(() => {
    if (!looksData.isWaiting) {
      return;
    }

    const timeOutId = setTimeout(() => {
      dispatch(spriteLooks({ isDisplayed: false, type: "changevisibility" }));
    }, waitTime);

    return () => clearTimeout(timeOutId);
  }, [looksData]);

  return (
    <div
      className={` absolute left-28 top-1 rounded-lg bg-gray-300  text-center ${
        looksData.isDisplayed ? "visible" : "hidden"
      }`}
    >
      <span>{looksData.msg}</span>
    </div>
  );
}
