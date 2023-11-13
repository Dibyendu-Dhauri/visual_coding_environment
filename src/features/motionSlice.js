import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: 0,
  y: 0,
  degree: 0,
  time: 0,
  displayXPos: false,
  displayYPos: false,
  displayDirection: false,
  previewAreaWidth: 0,
  previewAreaHeight: 0,
};

export const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    spriteMotion: (state, actions) => {
      switch (actions.payload.type) {
        case "moveforward":
          state.x += actions.payload.value;
          break;
        case "rotateClockWise":
          state.degree += actions.payload.value;
          break;
        case "rotateAntiClockWise":
          state.degree -= actions.payload.value;
          break;
        case "random-position":
          const randomX = Math.floor(Math.random() * state.previewAreaWidth);
          const randomY = Math.floor(Math.random() * state.previewAreaHeight);

          state.x = randomX;
          state.y = randomY;
          break;
        case "mouse-pointer":
          const tempX = -50;
          const tempY = 300;
          state.x = tempX;
          state.y = tempY;
          break;
        case "random-position-withDuration":
          state.x = Math.floor(Math.random() * state.previewAreaWidth);
          state.y = Math.floor(Math.random() * state.previewAreaHeight);
          state.time = actions.payload.value;
          break;

        case "mouse-pointer-withDuration":
          state.x = -50;
          state.y = 300;
          state.time = actions.payload.value;
          break;
        case "goToXandY":
          state.x = actions.payload.valueX;
          state.y = actions.payload.valueY;
          break;
        case "goToXandYWithTime":
          state.x = actions.payload.valueX;
          state.y = actions.payload.valueY;
          state.time = actions.payload.withDuration;
          break;
        case "pointInDirection":
          state.degree = actions.payload.value;
          break;
        case "pointInMousePointer":
          state.degree = 120;
          break;
        case "changeXBy":
          state.x += actions.payload.value;
          break;
        case "setXBy":
          state.x = actions.payload.value;
          break;
        case "changeYBy":
          state.y += actions.payload.value;
          break;
        case "setYBy":
          state.y = actions.payload.value;
          break;
        case "displayXPos":
          state.displayXPos = !state.displayXPos;
          break;
        case "displayYPos":
          state.displayYPos = !state.displayYPos;
          break;
        case "displayDirection":
          state.displayDirection = !state.displayDirection;
          break;
        case "dragValue":
          state.x = actions.payload.valueX;
          state.y = actions.payload.valueY;
          break;
        case "parentDivRef":
          state.previewAreaWidth = actions.payload.previewAreaWidth;
          state.previewAreaHeight = actions.payload.previewAreaHeight;
          break;
        case "edgeBounce":
          if (state.x < 0) {
            state.x = Math.abs(state.x);
          }
          if (state.y < 0) {
            state.y = Math.abs(state.y);
          }
          if (state.x > state.previewAreaWidth) {
            state.x -= state.x - state.previewAreaWidth;
          }
          if (state.y > state.previewAreaHeight) {
            state.y -= state.y - state.previewAreaHeight;
          }
          break;
        default:
          return state;
      }
    },
  },
});

export const { spriteMotion } = motionSlice.actions;

export default motionSlice.reducer;
