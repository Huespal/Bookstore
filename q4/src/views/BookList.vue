<script setup lang="ts">
import BookItem from '@/components/BookItem/BookItem.vue';
import { useGetBooks } from '@/domain/books/api';
import type { Book } from '@/domain/books/types';

const { isPending, isError, data } = useGetBooks();
const books: Book[] = data.value ?? [];
</script>

<template>
  <div class="book-list">
    <h1>Top Books of all time</h1>
    <p v-if="isPending" class="book-feedback">
      Loading books...
    </p>
    <p v-else-if="isError || books.length <= 0" class="book-feedback">
      There are no books at this moment.
    </p>
    <BookItem
      v-for="(book, index) in books"
      :key="book.slug"
      :position="index + 1"
      :title="book.title"
      :rating="book.rating"
      :author="book.author"
      :slug="book.slug"
      :cover="book.cover"
      :synopsis="book.synopsis"
      :upvoted="book.upvoted"
      :upvotes="book.upvotes"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';

.book-list {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  align-content: center;
  .book-feedback {
    text-align: center;
  }
  h1 {
    color: theme.$primary-color;
    text-align: center;
  }
}
</style>
