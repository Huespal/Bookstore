<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { useCreateBook } from '@/domain/books/api';
import { ref } from 'vue';

const title = ref('');
const author = ref('');
const synopsis = ref('');
const rating = ref(0);
const file = ref<File>();

const { mutate: create } = useCreateBook();

const onUploadImage = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const imageFile = target.files?.[0];
  if (imageFile) { file.value = imageFile; }
}

const onSubmit = () => {
  create({
    author: author.value,
    title: title.value,
    cover: file.value?.name ?? null,
    rating: rating.value.toString(),
    synopsis: synopsis.value ?? null
  })
}

</script>

<template>
  <div class="book-form">
    <RouterLink to="/"> < Go Back </RouterLink>
    <h1>Add a book</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" v-model="title" />
        
        <label htmlFor="author">Author</label>
        <input id="author" v-model="author" />
        
        <label htmlFor="rating">Rating</label>
        <input id="rating" v-model="rating" type="number" />
      </div>
      
      <div>
        <label htmlFor="synopsis">Synopsis</label>
        <textarea id="synopsis" v-model="synopsis"></textarea>

        <label htmlFor="cover">Cover image</label>
        <input id="cover" @change="onUploadImage" type="file" accept="jpg" />
      </div>
      <div />
      <div class="book-form-submit-btn">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-form {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  padding: theme.$space-l;
  background-color: theme.$light-color;
  form {
    @include mixins.grid;
    padding: 0 10rem;
    label {
      font-size: large;
    }
    input {
      @include mixins.input;
    }
    textarea {
      @include mixins.input(theme.$space-xl);
    }
    .book-form-submit-btn {
      text-align: right;
    }
  }
}
</style>
