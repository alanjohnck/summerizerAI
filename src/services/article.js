import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const rapidapi = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

console.log(rapidapi);
export const articleApi=createApi({
    reducerPath:"articleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/"
       ,prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key',rapidapi);
        headers.set('X-RapidAPI-hOST','article-extractor-and-summarizer.p.rapidapi.com');
        return headers;
       }

    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.artcleUrl)}&lenght=3`
        })


    })

});
export const {useLazyGetSummaryQuery}=articleApi;