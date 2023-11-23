import { Layout } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MyMenu } from "./MyMenu";

export const MyLayout = props => (
    <>
        <Layout {...props} menu={MyMenu} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);
