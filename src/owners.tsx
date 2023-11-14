import { Datagrid, List, TextField, NumberField, SimpleList} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";

export const OwnerList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
    <List>
        {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                />
        ) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
        </Datagrid>
        )}
    </List>
    );
}