import React from 'react';
import { Helmet } from 'react-helmet';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './DataPage.css';
import graph from '../assets/linegraphMvF.png';

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
            <div>
                <img id="graphOne" src={graph} alt={graph}/>
            </div>
            <h3>
                Line Graph: Quarterly Sales of Product by Gender
            </h3>
            <ul>
                <li>The data suggests that males are slightly more inclined to buy this product than females.</li>
                <li>With males accounting for a larger share of the purchases, it looks like they have a stronger
                    preference for this product.
                </li>
                <li>Although males are leading in purchases, females still make up a significant portion of the market,
                    meaning there’s room for growth in female sales.
                </li>
                <li>The product seems to be more popular with men, but women are still an important audience that shouldn’t be
                    overlooked.
                </li>
                <li>Since males are leading in sales, it could be worth exploring ways to better engage female customers
                    and balance the gender gap.
                </li>
            </ul>

            <div>
                <p>

                </p>
            </div>

        </>
    );
}

export default DataPage;
