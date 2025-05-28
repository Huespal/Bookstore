<script setup lang="ts">
import BookComments from '@/components/Book/Comments/BookComments.vue';
import Upvote from '@/components/Upvote/Upvote.vue';
import { getImgSrc } from '@/core/helpers';
import { useGetBook } from '@/domain/books/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const { slug } = route.params;

const { isPending, data: book, isError } = useGetBook(slug as string);

</script>

<template>
  <div class="book-detail">
    <RouterLink to="/"> < Go Back </RouterLink>
    <p v-if="isPending" class="book-feedback">
      Loading book...
    </p>
    <p v-else-if="isError || !book" class="book-feedback">
      This book is not available at this moment.
    </p>
    <div v-else>
      <div class="book-title">
        <h1>{{ book.title }}</h1>
        <Upvote
          :reverse="true"
          :upvoted="book.upvoted"
          :upvotes="book.upvotes"
        />
      </div>
      <i>{{ book.author }}</i>
      <figure>
        <img :src="getImgSrc(book.cover)" />
      </figure>
      <h3>Synopsis</h3>
      <p>{{ book.synopsis }}</p>
      <strong>Rating: {{ book.rating }}/10</strong>
      <BookComments />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-detail {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  padding: theme.$space-l;
  background-color: theme.$light-color;

  .book-feedback {
    text-align: center;
  }

  .book-title {
    @include mixins.flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: theme.$breakpoint-m) {
      @include mixins.flex-column;
      align-items: start;
    }

    h1 {
      color: theme.$tertiary-color;
      margin: 0;
    }
  }
  figure {
    text-align: center;
    img {
      @include mixins.rounded;
    }
  }
}
</style>
