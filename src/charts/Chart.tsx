import { BarChart } from '@mui/x-charts/BarChart';
import { useGetList, Loading } from 'react-admin';

type Rocket = {
    id: number;
    name: string;
    thrust: number
};

function SimpleCharts() {

    const { data: rockets, total, isLoading, error } = useGetList<Rocket>(
        'rockets',
        {
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'thrust', order: 'ASC' }
        }
    );
    if (isLoading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }

    // if (rockets) {
    //     rockets.forEach((rocket) => {
    //         rocket_names.push(rocket.name);
    //         rocket_thrusts.push(rocket.thrust);
    //     });
    // }

    const rocket_names: string[] = rockets?.map((rocket) => rocket.name) || [];
    const rocket_thrusts: number[] = rockets?.map((rocket) => rocket.thrust) || [];

    return (
            <BarChart
                xAxis={[
                {
                    id: 'barCategories',
                    data: rocket_names,
                    scaleType: 'band',
                },
                ]}
                series={[
                {
                    data: rocket_thrusts,
                },
                ]}
                height={333}
            />
    );
}

export default SimpleCharts;
