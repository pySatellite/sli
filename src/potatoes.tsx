// in src/users.tsx
import { List, Datagrid, TextField } from "react-admin";

export const PotatoeList = () => (
    <List>
        <Datagrid>
            <TextField source="thickness" />
            <TextField source="mass" />
            <TextField source="color" />
            <TextField source="id" />
        </Datagrid>
    </List>
);