import React, { useState, useEffect, } from 'react'; 
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then (data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const handleClick = () => {
        setOpen(true);
      };


    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure you want to delete?')) {
        fetch(link, {method: 'DELETE'})
        .then (res => fetchData())
        .then (() => handleClick())
        .catch(err => console.error(err))
        
        }
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
        },
        {
            sortable: false,
            filterable: false,
            width: 50,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 50,
            accessor: 'links[1].href',
            Cell: row => <DeleteForeverIcon onClick={() => deleteCustomer(row.value)} color='inherit'/>
        }
    ]


    return(
        <div className="Table">
            <h3 style={{padding:10}}>Customers</h3> <AddCustomer saveCustomer={saveCustomer} />
           <ReactTable minRows={1} filterable={true} data={customers} columns={columns}
      />
        </div>
    );
}