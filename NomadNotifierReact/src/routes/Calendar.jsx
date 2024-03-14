import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import '../styles/Calendar.css';

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate();

    return (
        <div className="CalenderPage">
            <div className="home_buttons">
                <button className="homepage_btn homepage-homepage_btn" onClick={() => navigate('/')}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .changeDelay(60)
                            .typeString("Nomad Notifier.")
                            .start();
                        }}
                    />
                </button>
            </div>

            <div className="calendar-container">
                <DatePicker
                    selected={startDate}
                    onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                />
            </div>
        </div>
    );
}

export default Calendar;
