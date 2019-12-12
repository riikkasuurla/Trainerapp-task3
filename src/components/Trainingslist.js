import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

export default function Trainingslist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then (data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => <Moment format='MMMM Do YYYY, h:mm:ss'>{row.date}</Moment>
        },
        {
            Header: 'Duration (min)',
            accessor: 'duration'
        },
     
    ]

    return(
        <div className="Table">
            <h3>Trainings</h3>
          <ReactTable minRows={1} filterable={true} data={trainings} columns={columns}
      />
        </div>
    );
}