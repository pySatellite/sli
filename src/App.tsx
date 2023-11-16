import {
  Admin,
  Resource,
  ShowGuesser,
  nanoDarkTheme , radiantLightTheme
} from "react-admin";

import { fcrudDataProvider } from "./fcrudDataProvider";
import { Dashboard } from './Dashboard';
import { SatelliteList, SatelliteEdit, SatelliteCreate } from './satellites'
import { RocketList, RocketEdit, RocketCreate } from './rockets'
import { OwnerList, OwnerCreate, OwnerEdit } from './owners'

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketIcon from '@mui/icons-material/Rocket';
import Face5Icon from '@mui/icons-material/Face5';
import NotFound from "./NotFound";


export const App = () => (
  <Admin dataProvider={fcrudDataProvider} dashboard={Dashboard} catchAll={NotFound} theme={radiantLightTheme} darkTheme={nanoDarkTheme} >
      <Resource 
        name="satellites" 
        icon={SatelliteAltIcon} 
        list={SatelliteList} 
        show={ShowGuesser} 
        edit={SatelliteEdit}
        create={SatelliteCreate}
      />
      <Resource 
        name="rockets" 
        icon={RocketIcon} 
        list={RocketList}  
        recordRepresentation="name" 
        show={ShowGuesser}
        edit={RocketEdit}
        create={RocketCreate}
      />
      <Resource 
        name="owners" 
        icon={Face5Icon} 
        list={OwnerList} 
        recordRepresentation="name" 
        show={ShowGuesser}
        edit={OwnerEdit}
        create={OwnerCreate}
      />
  </Admin>
);
