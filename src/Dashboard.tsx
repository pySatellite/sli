

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import { useCommonQuery } from './useQueryData'
import { useQuery } from "react-query";
import queryClient from "./queryClient";



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
    const ver = import.meta.env.VITE_SLI_VERSION

    
    const { data: deploy_dt } = useQuery('deploy_dt', () => queryClient.getQueryData("deploy_dt"));
    const { data: isok } = useQuery('isok', () => queryClient.getQueryData("isok"));
    const { data: wel_msg } = useQuery('wel_msg', () => queryClient.getQueryData("wel_msg"));
    const { data: main_img } = useQuery('main_img', () => queryClient.getQueryData("main_img"));

    return (
    <Grid container spacing={2}>
        <Grid xs={12} md={8}>
            <SimpleCharts />
        </Grid>
        <Grid xs={12} md={4}>
            <center>
                <img src={main_img} height="333" width="100%"/>
            </center>
        </Grid>
            <Grid xs={12} md={4}>
        <Item>version : {ver}</Item>
        </Grid>
        <Grid xs={12} md={8}>
            <Item>🛰️ Satellite Location Information 🌌 🗺️ 📈</Item>
        </Grid>
        <Grid xs={12} md={1}>
            <Item>isok: {isok}</Item>
        </Grid>
        <Grid xs={12} md={2}>
            <Item>deploy_dt: {deploy_dt}</Item>
        </Grid>
        <Grid xs={12} md={9}>
            <Item>wel_msg: {wel_msg}</Item>
        </Grid>
    </Grid>
    );
}
