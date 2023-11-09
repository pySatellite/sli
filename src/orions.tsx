// in src/users.tsx
import { List, Datagrid, TextField, NumberField } from "react-admin";

export const OrionList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="color" />
            <NumberField source="mass" />
            <NumberField source="thickness" />
        </Datagrid>
    </List>
);