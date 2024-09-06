import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery:  fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints:(builder)=> ({
        getTodos: builder.query({
            query: ()=>({
                url: "/task",
                method: 'GET',
            })
        })
    })
})

export const {useGetTodosQuery} = baseApi