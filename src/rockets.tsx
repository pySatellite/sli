import { ArrayField, ChipField, Datagrid, List, NumberField, SingleFieldList, TextField, SimpleList} from 'react-admin';
import { useMediaQuery, Theme } from "@mui/material";

export const RocketList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.country}
                    tertiaryText={(record) => record.thrust}
                />
            ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="country" />
                <NumberField source="thrust" />
                <NumberField source="payload" />
                <ArrayField source="engines"><SingleFieldList><ChipField source="number" /></SingleFieldList></ArrayField>          
            </Datagrid>
        )}
    </List>
    );
}