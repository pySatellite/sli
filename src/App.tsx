import {
  Admin,
  Resource,
  ShowGuesser,
  EditGuesser,
  SimpleListConfigurable,
  ListGuesser
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { CheckList, CheckListEdit, CheckListCreate } from './checklists'


export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} >
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/> */}
    {/* <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon}/> */}
    <Resource name="checklist" icon={ChecklistIcon} list={CheckList} show={ShowGuesser} edit={CheckListEdit} create={CheckListCreate} />
  </Admin>
);
