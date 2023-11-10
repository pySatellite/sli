import { List, Datagrid, TextField, EmailField, SimpleList, EditButton, Edit, SimpleForm, TextInput, Create} from "react-admin";
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
                    <TextField source="id" />
                    <TextField source="dag" />
                    <EmailField source="email" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};


export const AlarmListEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="dag" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const AlarmListCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="dag" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);