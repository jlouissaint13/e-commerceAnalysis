import React from 'react';
import { Helmet } from 'react-helmet';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './DataPage.css'; 

function DataPage() {
    const navigate = useNavigate();


    return (
        <>
            <Helmet>
                <title>Data Page</title>
            </Helmet>

            <h1 id="dataPageTitle">DataPage</h1>
            
        </>
    );
}

export default DataPage;
