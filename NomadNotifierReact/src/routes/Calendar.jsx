//import React, { useState } from 'react';
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../styles/Calendar.css';



function Calendar() {
    const navigate = useNavigate();

  return (
    <div>
        <button id="returnHomePageButton" onClick={() => navigate('/')}>NomadNotifier</button>
        <div>
        <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
        </div>
    </div>
  );
}

export default Calendar;
