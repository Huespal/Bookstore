<script setup lang="ts">
import Upvote from '@/components/Upvote/Upvote.vue';
import { getImgSrc } from '@/core/helpers';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  position: number,
  title: string,
  rating: string,
  author: string,
  slug: string,
  cover: string,
  synopsis: string,
  upvoted: boolean,
  upvotes: number
}>();

const bookItemBgColor = computed(() => 
  `${props.position % 2 === 0 ? 'secondary' : 'light'}-color`)?.value;

const synopsisShort = computed(() => 
  `${props.synopsis.substring(0, 200)}${(props.synopsis ?? '')?.length > 200
  ? '...' : ''}`)?.value;

</script>

<template>
  <div class="book-item" :class="bookItemBgColor">
    <div>
      <div class="book-title">
        <RouterLink :to="slug">
          <h2>{{ position }}. {{ title }}</h2>
        </RouterLink>
        <p>({{ rating }}/10)</p>
      </div>
      <i>{{ author }}</i>
      <p>{{ synopsisShort }}</p>
      <Upvote
        :upvoted="upvoted"
        :upvotes="upvotes" />
    </div>
    <RouterLink :to="slug">
      <img :src="getImgSrc(cover)" />
    </RouterLink> 
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-item {
  @include mixins.flex;
  padding: theme.$space-l;
  justify-content: space-between;

  @media (max-width: theme.$breakpoint-m) {
    flex-direction: column-reverse;
  }

  .book-title {
    @include mixins.flex(theme.$space-s);
    align-items: center;
    h2 {
      color: theme.$tertiary-color;
    }
  }
  img {
    @include mixins.image-s;
  }
}
.light-color {
    background-color: theme.$light-color;
}
.secondary-color {
  background-color: theme.$secondary-color;
}
</style>