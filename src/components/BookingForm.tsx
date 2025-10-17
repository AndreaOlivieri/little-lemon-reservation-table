import React, { useState } from "react";

type BookingFormProps = {
  availableTimes: { availableTimes: string[] };
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => void;
};

const BookingForm: React.FC<BookingFormProps> = (props) => {
  const [occasion, setOccasion] = useState<string>("");
  const [guests, setGuests] = useState<number | string>("");
  const [date, setDate] = useState<string>("");
  const [times, setTimes] = useState<string>("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (value: string) => {
    setDate(value);
    props.dispatch(value);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return (
                    <option key={availableTimes} value={availableTimes}>
                      {availableTimes}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min={1} value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={"0"} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
