import {
    List,
    Datagrid, TextField, NumberField, SimpleList, DateField, TextInput
} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";

export const OrbitList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    const orbitFilters = [
        <TextInput source="q" label="Search" alwaysOn />
    ];

    return (
    <List filters={orbitFilters}>
        {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.line1}
                    tertiaryText={(record) => record.line2}
                />
        ) : (
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <NumberField source="tle_id" />
                <TextField source="name" />
                <DateField source="date" />
                <TextField source="line1" />
                <TextField source="line2" />

            </Datagrid>
        )}
    </List>
    );
}

