import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useQuery } from "react-query";
import queryClient from "./data/queryClient";
import SimpleCharts from "./charts/Chart"
import ReCharts from "./charts/ReCharts"
import Barchart from "./charts/NivoBar";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export const Dashboard = () => {
    let ver = import.meta.env.VITE_SLI_VERSION
    ver = ver.concat("-", process.env.NODE_ENV)
    const { data: img_main } = useQuery('img_main', () => queryClient.getQueryData("img_main"));
    const { data: deploy_dt } = useQuery('deploy_dt', () => queryClient.getQueryData("deploy_dt"));
    const { data: isok } = useQuery('isok', () => queryClient.getQueryData("isok"));
    const { data: wel_msg } = useQuery('wel_msg', () => queryClient.getQueryData("wel_msg"));


    return (
    <Grid container spacing={2}>
        {/*row 1*/}
        <Grid xs={12} md={8}>
            <ReCharts />
        </Grid>
        <Grid xs={12} md={4}>
            <center>
                <img src={img_main} height="333" width="90%"/>
            </center>
        </Grid>

        {/*row 2*/}
        <Grid xs={12} md={4}>
            <Item>version : {ver}</Item>
        </Grid>
        <Grid xs={12} md={8}>
            <Item>🛰️ Satellite Location Information 🌌 🗺️ 📈</Item>
        </Grid>

        {/*row 3*/}
        <Grid xs={12} md={2}>
            <Item>isok: {isok}</Item>
        </Grid>
        <Grid xs={12} md={2}>
            <Item>deploy_dt: {deploy_dt}</Item>
        </Grid>
        <Grid xs={12} md={8}>
            <Item>wel_msg: {wel_msg}</Item>
        </Grid>

        {/*row 4*/}
        <Grid xs={12} md={6}>
            <SimpleCharts />
        </Grid>
        <Grid xs={12} md={6}>
            <Barchart />
        </Grid>

    </Grid>
    );
}
