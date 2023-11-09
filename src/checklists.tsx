import { List, Datagrid, TextField, EmailField, SimpleList, EditButton, Edit, SimpleForm, TextInput, Create} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

export const CheckList = () => {
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


export const CheckListEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="dag" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const CheckListCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="dag" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);