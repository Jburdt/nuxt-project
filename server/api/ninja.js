export default defineEventHandler(async (event) => {
  // // handle  query params
  // const { name } = getQuery(event);

  // // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_wuP9Vush9uXVUA2A48Ia9KcpF6c4cAYn6eSbKmiA"
  );

  return data;
});
