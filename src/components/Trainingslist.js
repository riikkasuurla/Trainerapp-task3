import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Trainingslist() {
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then (data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const handleClick = () => {
        setOpen(true);
      };

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure you want to delete?')) {
        fetch(link, {method: 'DELETE'})
        .then (res => fetchData())
        .then (() => handleClick())
        .catch(err => console.error(err))
        
        }
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
        {
            sortable: false,
            filterable: false,
            width: 50,
            accessor: 'links[1].href',
            Cell: row => <DeleteForeverIcon onClick={() => deleteTraining(row.value)} color='inherit'/>
        }
    ]

    return(
        <div className="Table">
            <h3 style={{padding:10}}>Trainings</h3>
          <ReactTable minRows={1} filterable={true} data={trainings} columns={columns}
      />
        </div>
    );
}