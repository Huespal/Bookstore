<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { useCreateBook } from '@/domain/books/api';
import { useUploadImage } from '@/domain/images/api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const author = ref('');
const synopsis = ref('');
const rating = ref(0);
const file = ref<File>();

const router = useRouter();

const onCreated = () => {
  router.push('/');
}

const { mutate: create, isPending, isError } = useCreateBook(onCreated);
const { mutate: uploadImage } = useUploadImage();

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
  });
  if (!!file.value) {
    uploadImage(file.value);
  }
}

</script>

<template>
  <div class="book-form">
    <RouterLink to="/"> < Go Back </RouterLink>
    <h1>Add a book</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" v-model="title" />
        </fieldset>
        
        <fieldset>
          <label htmlFor="rating">Rating</label>
          <input id="rating" v-model="rating" type="number" step="0.1" />
        </fieldset>
      </div>
      
      <div>
        <fieldset>
          <label htmlFor="author">Author</label>
          <input id="author" v-model="author" />
        </fieldset>

      <fieldset>
        <label htmlFor="cover">Cover image</label>
        <input
          id="cover"
          type="file"
          accept="image/*"
          @change="onUploadImage"
        />
      </fieldset>
      </div>
      
      <fieldset class="book-form-synopsis">
        <label htmlFor="synopsis">Synopsis</label>
        <textarea id="synopsis" v-model="synopsis"></textarea>
      </fieldset>
      
      <div />

      <div class="book-form-submit">
        <Button type="submit" :disabled="isPending">Submit</Button>
        <p class="error-message" v-if="isError">
          There was an error creating the book. Please try again.
        </p>
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
    padding: 0 5rem;
    fieldset {
      @include mixins.fieldset;
      &.book-form-synopsis {
        display: grid;
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
    .book-form-submit {
      display: inline;
      text-align: right;
    }

    @media (max-width: theme.$breakpoint-default) {
      @include mixins.flex-column;
    }
  }
}
</style>
