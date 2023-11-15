// import React, { useState } from "react";
// import Icon from "./Icon";
// import { useDispatch, useSelector } from "react-redux";
// import { spriteMotion } from "../features/motionSlice";
import Events from '../category/Events';
import Looks from '../category/Looks';
import Motion from '../category/Motion'
import React from 'react';
export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
    <Motion/>
    <Looks/>
    {/* <Events/> */}
    </div>
  );
}
