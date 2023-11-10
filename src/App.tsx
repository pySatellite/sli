import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { fcrudDataProvider } from "./fcrudDataProvider";
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { AlarmList, AlarmListEdit, AlarmListCreate } from './alarmlists'
import { AirflowList, AirflowEdit, AirflowCreate } from "./airflows";


export const App = () => (
  <Admin dataProvider={fcrudDataProvider} dashboard={Dashboard} authProvider={authProvider} >
    <Resource name="alarms" icon={ChecklistIcon} list={AlarmList} show={ShowGuesser} edit={AlarmListEdit} create={AlarmListCreate} />
    <Resource name="airflows" icon={ChecklistIcon} list={AirflowList} show={ShowGuesser} edit={AirflowEdit} create={AirflowCreate} />
  </Admin>
);
