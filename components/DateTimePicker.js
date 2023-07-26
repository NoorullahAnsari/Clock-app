import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const DateTimePicker = () => {
  const [selectedZone, setSelectedZone] = useState(moment.tz.guess());
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(moment.tz(selectedZone).format("YYYY-MM-DD HH:mm:ss"));
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, [selectedZone]);

  const handleChangeZone = (event) => {
    setSelectedZone(event.target.value);
  };

  return (
    <div>
      <hr />
      <div className="text-2xl flex mt-10 justify-center">
        <div className="bg-white p-8 rounded shadow">
          <div className="text-2xl mt-2 font-bold">
            <label>Timezone:</label>
            <select value={selectedZone} onChange={handleChangeZone}>
              <option value="Your_Timezone">Your Timezone</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York</option>
              <option value="America/Los_Angeles">America/Los_Angeles</option>
              <option value="Europe/London">Europe/London</option>
              <option value="Europe/Paris">Europe/Paris</option>
              <option value="Asia/Tokyo">Asia/Tokyo</option>
              <option value="Asia/Dubai">Asia/Dubai</option>
              <option value="Australia/Sydney">Australia/Sydney</option>
              <option value="Pacific/Auckland">Pacific/Auckland</option>
              <option value="Asia/Kolkata">Asia/Kolkata</option>
              <option value="Asia/Shanghai">Asia/Shanghai</option>
            </select>
          </div>

          <h1>Current Date and Time ({selectedZone}):</h1>
          <div className="text-4xl mt-4 text-bold bg-gray-100 p-4">
            {currentDateTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
