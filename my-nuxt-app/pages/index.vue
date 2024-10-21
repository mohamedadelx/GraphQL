<template>
  <div>
    <h1>Products</h1>
    <div v-if="isFetching">load...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="data && data.products && data.products.items.length === 0">
      No products found.
    </div>
    <div v-else>
      <div v-for="product in data.products.items" :key="product.uid">
        <h2>{{ product.name }}</h2>
        <p>Special Price: {{ product.special_price }}</p>
        <p>Rating: {{ product.rating_summary }}</p>
        <img :src="product.small_image?.url" alt="Product image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClient, useQuery } from 'villus';

useClient({
  url: 'https://fitandfixstaging.hypernode.io/graphql',
});

const GetProductsQuery = `
{
  products(search: "a") {
    items {
      name
      uid
      
      special_price
      small_image {
        url
      }
      rating_summary
    }
  }
}
`;


const { data, error, isFetching } = useQuery({
  query: GetProductsQuery,
});
</script>
