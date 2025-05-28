<script setup lang="ts">
import Button from '@/components/Button/Button.vue';

const {
  page = 1,
  totalPages = 1
} = defineProps<{
  page?: number,
  totalPages?: number
}>();
</script>

<template>
  <div class="book-pagination">
    <Button :disabled="page === 1" @click="$emit('onChangePage', page - 1)">
      Previous
    </Button>
    <p>Page: {{ page }} of {{ totalPages }}</p>
    <Button :disabled="page >= totalPages" @click="$emit('onChangePage', page + 1)">
      Next
    </Button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-pagination {
  @include mixins.flex;
  padding: theme.$space-l;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
}
</style>