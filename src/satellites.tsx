import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, SimpleList, Create} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";
import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

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
                    <DateField source="launch_time" />
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
            <DateInput source="launch_time" />
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
            <TextInput source="name" />
            <DateInput source="launch_time" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <NumberInput source="angle" />
            <ReferenceInput source="owner_id" reference="owners" link="show" />
            <ReferenceInput source="rocket_id" reference="rockets" link="show" />
        </SimpleForm>
    </Create>
);