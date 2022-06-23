import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oh9b8307i401z4f8p40cyb/master',
    cache: new InMemoryCache()
})