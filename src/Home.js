import React from 'react';
import './Home.css';
import Switch from '@material-ui/core/Switch';

function Home() {
    return (
        <div>
            <h2>Our Pricing</h2>
            <span className="Price">
            <h4>Annually</h4>
            <Switch/>
            <h4>Monthly</h4>
            </span>
        </div>
    );
}

export default Home;
