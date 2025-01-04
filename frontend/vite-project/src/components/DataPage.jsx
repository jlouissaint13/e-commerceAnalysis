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
                <title>Data Visualization</title>
            </Helmet>
            <div>
                <h1 id="dataPageTitle">Data Visualization</h1>
            </div>
            <div>
                <h2 id="dataPageSub">A Collection of Insightful Charts and Graphs on Ecommerce Data</h2>
            </div>

        </>
    );
}

export default DataPage;
