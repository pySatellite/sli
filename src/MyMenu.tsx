import { Menu } from 'react-admin';
import PublicIcon from '@mui/icons-material/Public';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItems />
        <Menu.Item to="/earth" primaryText="Earth" leftIcon={<PublicIcon />}/>
        {/*<Menu.Item to="/rhythm" primaryText="Rhythm" leftIcon={<LibraryMusicIcon />} />*/}
    </Menu>
);
