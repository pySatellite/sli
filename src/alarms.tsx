import { List, Datagrid, TextField, EmailField, SimpleList, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceField, ReferenceInput} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

export const AlarmList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.dag}
                    secondaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <ReferenceField source="airflow_id" reference="airflows" link="show" />
                    <TextField source="id" />
                    <TextField source="dag" />
                    <EmailField source="email" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};


export const AlarmEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="dag" />
            <TextInput source="email" />
            <ReferenceInput source="airflow_id" reference="airflows" />
        </SimpleForm>
    </Edit>
);

export const AlarmCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="dag" />
            <TextInput source="email" />
            <ReferenceInput source="airflow_id" reference="airflows" />
        </SimpleForm>
    </Create>
);