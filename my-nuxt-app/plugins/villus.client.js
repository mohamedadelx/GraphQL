import { createClient } from 'villus';

export default defineNuxtPlugin((nuxtApp) => {
  const client = createClient({
    url: 'https://fitandfixstaging.hypernode.io/graphql', //endpoint
  });

  nuxtApp.provide('villus', client);
});
