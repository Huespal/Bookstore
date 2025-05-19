<script setup lang="ts">
import Upvote from '@/components/Upvote/Upvote.vue';
import { getImgSrc } from '@/core/helpers';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  position: number,
  title: string,
  imgUrl: string,
  rating: string,
  author: string,
  slug: string,
  synopsis: string,
  upvoted: boolean,
  upvotes: number
}>();

const upvotesCount = ref(props.upvotes);
const isUpvoted = ref(props.upvoted);

const bookItemBgColor = computed(() => 
  `${props.position % 2 === 0 ? 'secondary' : 'light'}-color`)?.value;

const synopsisShort = computed(() => 
  `${props.synopsis.substring(0, 200)}${(props.synopsis ?? '')?.length > 200
  ? '...' : ''}`)?.value;

const manageUpvotes = () => {
  isUpvoted.value === true
    ? upvotesCount.value--
    : upvotesCount.value++;
  isUpvoted.value = !isUpvoted.value;
}

</script>

<template>
  <div class="book-item" :class="bookItemBgColor">
    <div>
      <div class="book-title">
        <RouterLink :to="slug">
          <h4 class="book-title-text">{{ position }}. {{ title }}</h4>
        </RouterLink>
        <p>({{ rating }}/10)</p>
      </div>
      <i>{{ author }}</i>
      <p>{{ synopsisShort }}</p>
      <Upvote
        @click="manageUpvotes"
        :upvoted="isUpvoted"
        :upvotes="upvotesCount" />
    </div>
    <RouterLink :to="slug">
      <img :src="getImgSrc" />
    </RouterLink> 
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

.book-item {
  @include mixins.flex;
  padding: theme.$space-l;
  .book-title {
    @include mixins.flex(theme.$space-s);
    align-items: center;
    .book-title-text {
      color: theme.$primary-color;
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