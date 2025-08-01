import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table booked: " + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Occasion:
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
