import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);

    const firstDay = new Date(year, month, 1).getDay();

    const calendar = [];

    // Add empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Add cells for current month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <div
          key={day}
          className="calendar-day hover:bg-yellow-400 flex items-center justify-center rounded-full duration-200 transition-all cursor-pointer p-2"
        >
          {day}
        </div>
      );
    }

    // Calculate the number of remaining cells to fill the last row
    const remainingCells = 7 - ((firstDay + daysInMonth) % 7);

    // Add empty cells for the remaining days
    for (let i = 0; i < remainingCells && remainingCells !== 7; i++) {
      calendar.push(
        <div
          key={`empty-${daysInMonth + i}`}
          className="calendar-day empty"
        ></div>
      );
    }

    return calendar;
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  return (
    <div className="calendar w-[80%]">
      <div className="header my-10 text-center">
        <span className="bg-white border border-gray-100 text-xl shadow-xl font-bold rounded-full py-3 px-16">
          Dates
        </span>
      </div>
      <div className="calendar-header flex items-center justify-between py-5">
        <button className="calendar-navigation" onClick={goToPreviousMonth}>
          <BsChevronLeft />
        </button>
        <h2 className="calendar-title font-semibold text-lg">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button className="calendar-navigation" onClick={goToNextMonth}>
          <BsChevronRight />
        </button>
      </div>
      <div className="calendar-body">
        <div className="calendar-days flex justify-between items-center border-transparent text-gray-300 text-sm gap-2 md:gap-6">
          {days.map((day) => (
            <div key={day} className="calendar-day-header ">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid text-sm gap-0 md:gap-2">
          {renderCalendar()}
        </div>
      </div>
      <div className="button-option flex gap-3 items-center justify-between mt-5">
        <button className="border border-gray-600 font-light text-[10px] hover:bg-gray-100 duration-200 transition-all px-5 py-2 rounded-full ">
          Exact dates
        </button>
        <button className="border border-gray-600 font-light text-[10px] hover:bg-gray-100 duration-200 transition-all px-5 py-2 rounded-full ">
          +1 day
        </button>
        <button className="border border-gray-600 font-light text-[10px] hover:bg-gray-100 duration-200 transition-all px-5 py-2 rounded-full ">
          +2 day
        </button>
        <button className="border border-gray-600 font-light text-[10px] hover:bg-gray-100 duration-200 transition-all px-5 py-2 rounded-full ">
          +7 day
        </button>
      </div>
    </div>
  );
};

export default Calendar;
