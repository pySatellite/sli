import { useGetList, Loading } from 'react-admin';

type Rocket = {
    id: number;
    name: string;
    thrust: number
};

const ListRocket = ({perPage}) => {
    const { data: rockets, total, isLoading, error } = useGetList<Rocket>(
        'rockets',
        {
            pagination: { page: 1, perPage: perPage },
            sort: { field: 'id', order: 'DESC' }
        }
    );
    if (isLoading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    return (
        <>
            <h1>Rockets 🚀</h1>
            <ul>
                {/* TypeScript knows that posts is of type Post[] */}
                {rockets.map(rocket =>
                    <li key={rocket.id}>{rocket.name} {rocket.thrust}</li>
                )}
            </ul>
            <p>{rockets.length} / {total} articles</p>
        </>
    );
};

export default ListRocket;
