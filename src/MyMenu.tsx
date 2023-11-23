import { Menu } from 'react-admin';
import PublicIcon from '@mui/icons-material/Public';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItems />
        <Menu.Item to="/earth" primaryText="Earth" leftIcon={<PublicIcon />}/>
    </Menu>
);
