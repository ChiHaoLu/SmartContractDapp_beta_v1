import React, { useState, useEffect } from 'react';
var Web3 = require("web3")
const web3 = new Web3("https://cloudflare-eth.com")

import Typography from '@mui/material/Typography';


const FunctionSys: React.FC = () => {



    return (
        <div>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                <br /> Constructing... <br />
            </Typography>
        </div>
    );
};

export default FunctionSys;
