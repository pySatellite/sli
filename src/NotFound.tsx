// in src/NotFound.js
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <center>
                <h1>404</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqIqwDD3oVwC1F4Ecp98ZkXKFAg5AvBSpHw&usqp=CAU"  />
                <h1>Page not found</h1>
            </center>
            
        </CardContent>
    </Card>
);