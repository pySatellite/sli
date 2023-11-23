import {
    Admin,
    Resource,
    ShowGuesser,
    nanoDarkTheme, radiantLightTheme,
    CustomRoutes
} from "react-admin";

import { fcrudDataProvider } from "./data/fcrudDataProvider";
import { Dashboard } from './Dashboard';
import { SatelliteList, SatelliteEdit, SatelliteCreate } from './list/satellites'
import { RocketList, RocketEdit, RocketCreate } from './list/rockets'
import { OwnerList, OwnerCreate, OwnerEdit } from './list/owners'

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketIcon from '@mui/icons-material/Rocket';
import Face5Icon from '@mui/icons-material/Face5';
import AnimationIcon from '@mui/icons-material/Animation';

import { Route } from "react-router-dom";
import NotFound from "./NotFound";
import queryClient from './data/queryClient'; // Import the queryClient
import { MyLayout} from "./MyLayout";
import {OrbitList} from "./list/orbits";
import Earth from "./components/Earth";
import Rhythm from "./components/Rhythm";



export const App = () => (
      <Admin dataProvider={fcrudDataProvider} dashboard={Dashboard} catchAll={NotFound} theme={radiantLightTheme} darkTheme={nanoDarkTheme}
             queryClient={queryClient}
             layout={MyLayout}>
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
              name="orbits"
              icon={AnimationIcon}
              list={OrbitList}
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

          <CustomRoutes>
              <Route path="/earth" element={<Earth />} />
              <Route path="/rhythm" element={<Rhythm />} />
          </CustomRoutes>

      </Admin>
);
