import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, SimpleList, Create, DateTimeInput} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, DateInput } from 'react-admin';

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
                <Datagrid rowClick="show">
                    <NumberField source="id" />
                    <TextField source="name" />
                    <TextField source="launch_time" />
                    <NumberField source="latitude" />
                    <NumberField source="longitude" />
                    <NumberField source="angle" />
                    <ReferenceField source="rocket_id" reference="rockets" />
                    <ReferenceField source="owner_id" reference="owners" />
                </Datagrid>
            )}
        </List>
    );
};


export const SatelliteEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <DateTimeInput source="launch_time" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <NumberInput source="angle" />
            <ReferenceInput source="owner_id" reference="owners" link="show" />
            <ReferenceInput source="rocket_id" reference="rockets" link="show" />
        </SimpleForm>
    </Edit>
);


export const SatelliteCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" defaultValue="pySatellite-000" />
            <DateTimeInput source="launch_time" />
            <NumberInput source="latitude" defaultValue="37.4932385" />
            <NumberInput source="longitude" defaultValue="126.9175228" />
            <NumberInput source="angle" defaultValue="77.777" />
            <ReferenceInput source="owner_id" reference="owners" link="show" />
            <ReferenceInput source="rocket_id" reference="rockets" link="show" />
        </SimpleForm>
    </Create>
);