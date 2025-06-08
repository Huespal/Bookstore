<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { ref } from 'vue';

const searchText = ref('');
</script>

<template>
  <div class="book-search">
    <input v-model="searchText" placeholder="Search by title or synopsis...">
    <Button @click="$emit('onSearch', searchText)">Search</Button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-search {
  @include mixins.flex;
  justify-content: end;
  input {
    @include mixins.rounded;
    min-width: 12rem;
  }
}
</style>