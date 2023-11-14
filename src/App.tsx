import {
  Admin,
  Resource,
  ShowGuesser,
  ListGuesser
} from "react-admin";
import { fcrudDataProvider } from "./fcrudDataProvider";
import { Dashboard } from './Dashboard';
import { SatelliteList } from './satellites'
import { RocketList } from './rockets'
import { OwnerList } from './owners'

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketIcon from '@mui/icons-material/Rocket';
import Face5Icon from '@mui/icons-material/Face5';


export const App = () => (
  <Admin dataProvider={fcrudDataProvider} dashboard={Dashboard} >
    <Resource name="satellites" icon={SatelliteAltIcon} list={SatelliteList} />
    <Resource name="rockets" icon={RocketIcon} list={RocketList}  />
    <Resource name="owners" icon={Face5Icon} list={OwnerList} />
  </Admin>
);
