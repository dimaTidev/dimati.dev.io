'use client';

import { ApolloProvider } from '@apollo/client';
import ApolloClient from './apolloClient';

export function ApolloContextProvider({children}) {

    return (
        <>
            <ApolloProvider client={ApolloClient}>
                {children}
            </ApolloProvider>
        </>

    )
}