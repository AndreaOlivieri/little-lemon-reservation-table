import React from "react";
import "./ConfirmedBooking.scss";

const ConfirmedBooking: React.FC = () => {
  return (
    <div className="confirm">
      <div>
        <h1>
          Booking has been <span>confirmed!</span>
        </h1>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
