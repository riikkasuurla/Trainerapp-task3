import React, { useState, useEffect, } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then (data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname'
        },
        {
            Header: 'Last Name',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        } 
    ]


    return(
        <div className="Table">
            <h3>Customers</h3>
           <ReactTable minRows={1} filterable={true} data={customers} columns={columns}
      />
        </div>
    );
}