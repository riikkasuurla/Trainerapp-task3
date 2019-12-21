import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Style.css';

export default function Customerlist() {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
            setEvent(responseData);
        }); 
            }, [])
        
           
    const localizer = momentLocalizer(moment)
   

    return(
        <div className="Calendar">

          <Calendar
            localizer={localizer}
            events={event}
            style={{height: 500}} />
        </div>
    );
}