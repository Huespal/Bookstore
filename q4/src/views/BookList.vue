<script setup lang="ts">
import BookItem from '@/components/Book/BookItem.vue';
// TODO: Uncomment when API ready.
// import { useGetBooks } from '@/domain/books/api';

// const { data } = useGetBooks();

// const books = data ?? [{
const books = [{
  author: "Marcel Proust",
  cover: "01.jpg",
  rating: "9.9",
  slug: "in-search-of-lost-time",
  synopsis: "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
  title: "In Search of Lost Time",
  upvoted: false,
  upvotes: 1111
},
{
  author: "Miguel de Cervantes",
  cover: "02.jpg",
  rating: "9.8",
  slug: "don-quixote",
  synopsis: "Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.\nDon Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.",
  title: "Don Quixote",
  upvoted: true,
  upvotes: 1022
}];
</script>

<template>
  <div class="book-list">
    <h1>Top Books of all time</h1>
    <BookItem
      v-for="(book, index) in books"
      :key="book.slug"
      :position="index + 1"
      :title="book.title"
      :imgUrl="book.cover"
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
  h1 {
    color: theme.$primary-color;
    text-align: center;
  }
}
</style>
