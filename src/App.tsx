import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { fcrudDataProvider } from "./fcrudDataProvider";
import ChecklistIcon from '@mui/icons-material/Checklist';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { AlarmList, AlarmEdit, AlarmCreate } from './alarms'
import { AirflowList, AirflowEdit, AirflowCreate } from "./airflows";


export const App = () => (
  <Admin dataProvider={fcrudDataProvider} dashboard={Dashboard} authProvider={authProvider} >
    <Resource name="alarms" icon={ChecklistIcon} list={AlarmList} show={ShowGuesser} edit={AlarmEdit} create={AlarmCreate} />
    <Resource name="airflows" icon={AccountTreeIcon} list={AirflowList} show={ShowGuesser} edit={AirflowEdit} create={AirflowCreate} recordRepresentation="name" />
  </Admin>
);
