import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, SimpleList} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";


export const SatelliteList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.launch_time}
                    tertiaryText={(record) => record.rocket_id}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <NumberField source="id" />
                    <TextField source="name" />
                    <DateField source="launch_time" />
                    <NumberField source="latitude" />
                    <NumberField source="longitude" />
                    <NumberField source="angle" />
                    <ReferenceField source="owner_id" reference="owners" />
                    <ReferenceField source="rocket_id" reference="rockets" />
                </Datagrid>
            )}
        </List>
    );
};