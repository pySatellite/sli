const ver = import.meta.env.VITE_SLI_VERSION

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


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
    return (
        <Grid container spacing={2}>
            <Grid xs={12} md={8}>
                <SimpleCharts />
            </Grid>
            <Grid xs={12} md={4}>
                <center>
                    <img src="https://www.intelligence-airbusds.com/files/pmedia/public/r65367_9_banner-constellation-intelligence-airbus.jpg" height="333" width="100%"/>
                </center>
            </Grid>
                <Grid xs={12} md={4}>
            <Item>version : {ver}</Item>
            </Grid>
            <Grid xs={12} md={8}>
                <Item>🛰️ Satellite Location Information 🌌 🗺️ 📈 💨</Item>
            </Grid>
        </Grid>
    );
}
