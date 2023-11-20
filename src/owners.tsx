import {
    Create, List, Edit, 
    SimpleForm, TextInput,
    Datagrid, TextField, NumberField, SimpleList
} from 'react-admin';
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
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="name" />
        </Datagrid>
        )}
    </List>
    );
}


export const OwnerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const OwnerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);