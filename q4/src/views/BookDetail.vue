<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import Upvote from '@/components/Upvote/Upvote.vue';
import { getImgSrc } from '@/core/helpers';
import { useGetBook } from '@/domain/books/api';
import { type Comment } from '@/domain/books/types';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { slug } = route.params;

const { isPending, data, isError } = useGetBook(slug as string);
const book = data.value;

const comment = ref('');
const comments = ref<Comment[]>([
  {
    author: 'John Doe',
    message: 'I really like this book. 100% Recommended.'
  },
  {
    author: 'Marie Doe',
    message: 'You should all read this book. I love how the story wraps up!'
  }
]);
const onSubmitComment = () => {
  comments.value.push({ author: 'Guest', message: comment.value });
  comment.value = '';
}

</script>

<template>
  <div class="book-detail">
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
      <h3>Comments</h3>
      <p v-if="comments.length <= 0">
        There are no comments yet. Be the first to comment!
      </p>
      <div v-else v-for="({ author, message }) in comments">
        <strong>{{ author }}</strong>
        <p>{{ message }}</p>
      </div>
      <div class="book-comment">
        <textarea
          v-model="comment"
          rows="10" cols="50"
          placeholder="Write a comment"
        ></textarea>
        <Button @click="onSubmitComment">Submit</Button>
      </div>
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
  .book-comment {
    @include mixins.flex;
    align-items: end;
    textarea {
      @include mixins.rounded;
    }
  }
}
</style>
