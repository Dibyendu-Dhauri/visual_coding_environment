import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  time: 0,
  isDisplayed: false,
  isWaiting: false,
  size: 100,
  isShowed: true,
  color: "#FFAB19",
  brightness: 1,
  ghost: 1,
  displaySize: false,
};

export const looksSlice = createSlice({
  name: "looks",
  initialState,
  reducers: {
    spriteLooks: (state, actions) => {
      switch (actions.payload.type) {
        case "sayMsgWithTime":
          state.msg = actions.payload.msg;
          state.time = actions.payload.time;
          state.isDisplayed = actions.payload.isDisplayed;
          state.isWaiting = actions.payload.isWaiting;
          break;
        case "changevisibility":
          state.isDisplayed = actions.payload.isDisplayed;
          actions.thinkTime = actions.payload.thinkTime;
          break;
        case "sayMsg":
          state.msg = actions.payload.msg;
          state.isDisplayed = actions.payload.isDisplayed;
          state.isWaiting = actions.payload.isWaiting;

          break;
        case "thinkMsgWithTime":
          state.msg = actions.payload.msg;
          state.isDisplayed = actions.payload.isDisplayed;
          state.time = actions.payload.time;
          state.isWaiting = actions.payload.isWaiting;

          break;
        case "thinkMsg":
          state.msg = actions.payload.msg;
          state.isDisplayed = actions.payload.isDisplayed;
          state.isWaiting = actions.payload.isWaiting;

          break;
        case "changeSize":
          state.size += actions.payload.size;
          break;
        case "sizePercentage":
          state.size = actions.payload.size;
          break;

        case "visible":
          state.isShowed = actions.payload.isShowed;
          break;
        case "hide":
          state.isShowed = actions.payload.isShowed;
          break;
        case "random-color":
          state.color = actions.payload.color;
          break;
        case "brightness":
          state.brightness += actions.payload.value / 100;
          break;
        case "ghost":
          state.ghost -= actions.payload.value / 100;
          break;
        case "set-random-color":
          state.color = "#FFAB19";
          break;
        case "set-brightness":
          state.brightness = actions.payload.value / 25;
          break;
        case "set-ghost":
          state.ghost = actions.payload.value / 25;
          break;
        case "clear-graphics-effects":
          state.color = "#FFAB19";
          state.brightness = 1;
          state.ghost = 1;
          break;
        case "displaySize":
          state.displaySize = !state.displaySize;
          break;
        default:
          return state;
      }
    },
  },
});

export const { spriteLooks } = looksSlice.actions;
export default looksSlice.reducer;
