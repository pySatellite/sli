// in src/NotFound.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import queryClient from "./data/queryClient";
import {useQuery} from "react-query";

export default () => {
    const { data: img_not_found } = useQuery('img_not_found', () => queryClient.getQueryData("img_not_found"));
    return (
        <Card>
            <Title title="Not Found"/>
            <CardContent>
                <center>
                    <h1>404</h1>
                    <img
                        src={img_not_found} />
                    <h1>Page not found</h1>
                </center>

            </CardContent>
        </Card>
    );
}
