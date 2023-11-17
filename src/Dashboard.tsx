

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { getConfig } from './Helper'

import { useStore } from 'react-admin';

import queryClient from './queryClient'; // Import the queryClient



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function SimpleCharts() {
    return (
                        <BarChart
                            xAxis={[
                            {
                                id: 'barCategories',
                                data: ['Falcon 9', 'Ariane', 'Soyuz', 'Delta IV', 'Long March 3B', 'H-IIA', 'Falcon Heavy', 'GSLV Mk III', 'PSLV'],
                                scaleType: 'band',
                            },
                            ]}
                            series={[
                            {
                                data: [6940, 13720, 4220, 7020,  10500, 2000, 22600, 6670, 4700],
                            },
                            ]}
                            height={333}
                        />
    );
  }


export const Dashboard = () => {
    // const queryClient = new QueryClient();
    // // queryClient.setQueryData('aaa', 'aaa');
    // queryClient.setQueryData("aaaaa", "aaaaa")
    const exampleKey: string = queryClient.getQueryData('exampleKey');
    const welcome: string = queryClient.getQueryData('welcome');

    console.log("exampleKey:" + exampleKey)
    console.log("welcome:" + welcome)
    const ver = import.meta.env.VITE_SLI_VERSION


    const isok = queryClient.getQueryData('isok')
    const version = queryClient.getQueryData('version')
    const welcom_msg = queryClient.getQueryData('welcom_msg')
    const server_version = queryClient.getQueryData('server_version')

    return (
    <Grid container spacing={2}>
        <Grid xs={12} md={8}>
            <SimpleCharts />
        </Grid>
        <Grid xs={12} md={4}>
            <center>
                <img src="./images/satellites.webp" height="333" width="100%"/>
            </center>
        </Grid>
            <Grid xs={12} md={4}>
        <Item>version : {ver}</Item>
        </Grid>
        <Grid xs={12} md={8}>
            <Item>🛰️ Satellite Location Information 🌌 🗺️ 📈 💨isok:{isok}, version:{version}, welcom_msg:{welcom_msg}, server_version:{server_version}</Item>
        </Grid>
    </Grid>
    );
}
