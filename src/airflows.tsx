import { List, Datagrid, TextField, SimpleList, EditButton, Edit, SimpleForm, TextInput, Create} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

export const AirflowList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.cron}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="cron" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};


export const AirflowEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="cron" />
        </SimpleForm>
    </Edit>
);

export const AirflowCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="cron" />
        </SimpleForm>
    </Create>
);