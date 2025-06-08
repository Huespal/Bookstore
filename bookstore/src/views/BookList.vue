<script setup lang="ts">
import BookItem from '@/components/Book/Item/BookItem.vue';
import Button from '@/components/Button/Button.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Search from '@/components/Search/Search.vue';
import { useGetBooks } from '@/domain/books/api';
import type { Book } from '@/domain/books/types';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { isPending, isError, data, isSuccess } = useGetBooks();

const initialBooks = ref<Book[]>(data.value ?? []);

const page = ref<number>(1);
const pageSize = 3;
const totalPages = ref(Math.ceil(initialBooks.value.length / pageSize));

const books = ref<Book[]>(initialBooks.value.slice(0, pageSize));

watch(() => isSuccess.value, () => {
  if (isSuccess.value) {
    initialBooks.value = data.value ?? [];
    books.value = initialBooks.value.slice(0, pageSize);
    totalPages.value = Math.ceil(initialBooks.value.length / pageSize);
  }
});

const onFilter = (q: string) => {
  if (!q) books.value = initialBooks.value;

  books.value = initialBooks.value.filter(book => 
    book.title.includes(q)
    || book.synopsis.includes(q)
  );

  totalPages.value = Math.ceil(books.value.length / pageSize);
};

const onChangePage = (updatedPage: number) => {
  const startIndex = (updatedPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const filteredBooks = initialBooks.value.slice(startIndex, endIndex);
  books.value = filteredBooks;
  page.value = updatedPage;
};

const onGoToForm = () => {
  router.push('/create');
}

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
      <header>
        <Button @click="onGoToForm">+ Add</Button>
        <Search @onSearch="onFilter" />
      </header>
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
      <Pagination
        :page="page"
        :totalPages="totalPages"
        @onChangePage="onChangePage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-list {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  align-content: center;
  h1 {
    color: theme.$primary-color;
    text-align: center;
  }
  .book-feedback {
    text-align: center;
  }
  header {
    @include mixins.flex;
    justify-content: space-between;
    align-items: center;
    padding: theme.$space-l;
  }
}
</style>
