import React from "react";
import BookingForm from "./BookingForm";
import "./Booking.scss";
import "./BookingForm.scss";

type BookingProps = {
  availableTimes: { availableTimes: string[] };
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => void;
};

const Booking: React.FC<BookingProps> = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
