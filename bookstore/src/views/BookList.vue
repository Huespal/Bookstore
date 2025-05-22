<script setup lang="ts">
import BookItem from '@/components/BookItem/BookItem.vue';
import Button from '@/components/Button/Button.vue';
import { useGetBooks } from '@/domain/books/api';
import type { Book } from '@/domain/books/types';
import { ref } from 'vue';

const { isPending, isError, data } = useGetBooks();
const initialBooks = data.value ?? [];

const page = ref<number>(1);
const pageSize = 3;
const totalPages = Math.ceil(initialBooks.length / pageSize);

const books = ref<Book[]>(initialBooks.slice(0, pageSize));

const searchText = ref('');
const onFilter = () => {
  if (!searchText.value) books.value = initialBooks;
  books.value = initialBooks.filter(book => 
    book.title.includes(searchText.value)
    || book.synopsis.includes(searchText.value)
  );
};

const onChangePage = (updatedPage: number) => {
  const startIndex = (updatedPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  books.value = initialBooks.slice(startIndex, endIndex);
  page.value = updatedPage;
};

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
    <div v-else>
      <div class="book-search">
        <input v-model="searchText" placeholder="Search by title or synopsis...">
        <Button @click="onFilter">Search</Button>
      </div>
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
      <div class="book-pagination">
        <Button :disabled="page === 1" @click="onChangePage(page - 1)">
          Previous
        </Button>
        <p>Page: {{ page }} of {{ totalPages }}</p>
        <Button :disabled="page >= totalPages" @click="onChangePage(page + 1)">
          Next
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-list {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  align-content: center;
  .book-search {
    @include mixins.flex;
    padding: theme.$space-l;
    justify-content: end;
    input {
      @include mixins.rounded;
      min-width: 12rem;
    }
  }
  .book-feedback {
    text-align: center;
  }
  h1 {
    color: theme.$primary-color;
    text-align: center;
  }
  .book-pagination {
    @include mixins.flex;
    padding: theme.$space-l;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
}
</style>
