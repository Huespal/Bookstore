<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { type Comment } from '@/domain/books/types';
import { ref } from 'vue';

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
</template>

<style lang="scss" scoped>
@use '@/core/styles/mixins';

.book-comment {
  @include mixins.flex;
  align-items: end;
  textarea {
    @include mixins.rounded;
  }
}
</style>
