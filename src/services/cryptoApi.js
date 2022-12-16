import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '1c646660a0mshf9b8e4210aa9f4fp1657a1jsn41dbc3040653'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
       getCryptos: builder.query({
           query: (count) => createRequest(`/coins?limit=${count}`),
       }),
       getExchanges: builder.query({
             query: () => createRequest(`/exchanges`),
        }),
       getCryptoDetails: builder.query({
           query: (coinId) => createRequest(`/coin/${coinId}`),
       }),
       getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
    })
   })
});


export const { useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;