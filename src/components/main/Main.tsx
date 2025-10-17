import React, { useReducer } from "react";
import "./Main.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "../booking/Booking";
import ConfirmedBooking from "../booking/ConfirmedBooking";
import Header from "../header/Header";

type State = { availableTimes: string[] };

const seededRandom = function (seed: number) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date: Date) {
  let result: string[] = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData: any) {
  return true;
};

const initialState: State = { availableTimes: fetchAPI(new Date()) };

function updateTimes(state: State, date: string) {
  return { availableTimes: fetchAPI(new Date(date)) };
}

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(updateTimes as any, initialState);
  const navigate = useNavigate();

  function submitForm(formData: any) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
