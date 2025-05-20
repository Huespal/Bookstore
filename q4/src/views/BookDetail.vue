<script setup lang="ts">
import Upvote from '@/components/Upvote/Upvote.vue';
import { getImgSrc } from '@/core/helpers';
// TODO: Uncomment when API ready.
// import { useGetBook } from '@/domain/books/api';
// import { useRoute } from 'vue-router';

// const route = useRoute();
// const { slug } = route.params;

// const { data } = useGetBook(slug as string);

// const book = data ?? {
const book = {
  author: "Marcel Proust",
  cover: "01.jpg",
  rating: "9.9",
  slug: "in-search-of-lost-time",
  synopsis: "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
  title: "In Search of Lost Time",
  upvoted: false,
  upvotes: 1111
};

</script>

<template>
  <div class="book-detail">
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
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-detail {
  box-shadow: 0px 0px 10px 0px theme.$grey-color;
  padding: theme.$space-l;
  background-color: theme.$light-color;
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
