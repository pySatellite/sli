import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
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
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="dag" />
                    <EmailField source="email" />
                </Datagrid>
            )}
        </List>
    );
};