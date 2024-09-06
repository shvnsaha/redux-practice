import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {
                const params = new URLSearchParams();
                if(priority){
                    params.append("priority",priority)
                }
                return {
                    url: `/tasks`,
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['todo']
        }),

        addTodo: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: "/task",
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags:['todo']
        }),

        updateTodo: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: `/task/${data.id}`,
                    method: 'PUT',
                    body: data.data,
                }
            },
            invalidatesTags:['todo']
        }),

    })
})

export const { useGetTodosQuery,useAddTodoMutation,useUpdateTodoMutation } = baseApi