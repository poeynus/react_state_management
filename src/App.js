import React from "react";
import axios from 'axios';
// import CounterContainer from "./redux-practice/components/CounterContainer";
// import InputSample from "./useRef-practice/InputSample";
// import ScrollCheck from "./useRef-practice/scrollCheck";
// import { BubbleTest } from "./chartJS-practice/bubble";
// import { PieTest } from "./chartJS-practice/pie";
// import { GridLayout } from "./grid-practice/gridLayout";
// import { Skrr } from "./skeleton-practice/skrr";
// import { UseRedu } from "./useReducer-practice/redu";
// import { Scrollll } from "./customHook-practice/useScroll";


const customAxios = axios.create({ timeout: 3000 });

export const App = () => {
  const axiosTest = async() => {
    try {
      const result = axios({
        method:'get',
        url:"/api/test",
        data: {id: 1}
      })
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button onClick={axiosTest}>
      Tttttetetetetete
    </button>
  );
};
