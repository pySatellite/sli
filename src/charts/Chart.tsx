import { BarChart } from '@mui/x-charts/BarChart';


function SimpleCharts() {
    const data_x : string[] = ['Falcon 9', 'Ariane', 'Soyuz', 'Delta IV', 'Long March 3B', 'H-IIA', 'Falcon Heavy', 'GSLV Mk III', 'PSLV'];
    const data_y: number[] = [6940, 13720, 4220, 7020,  10500, 2000, 22600, 6670, 4700];
    return (
            <BarChart
                xAxis={[
                {
                    id: 'barCategories',
                    data: data_x,
                    scaleType: 'band',
                },
                ]}
                series={[
                {
                    data: data_y,
                },
                ]}
                height={333}
            />
    );
}

export default SimpleCharts;
