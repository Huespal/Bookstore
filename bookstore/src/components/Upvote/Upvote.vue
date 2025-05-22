<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { ref } from 'vue';

const {
  reverse = false,
  ...props
} = defineProps<{
  reverse?: boolean,
  upvoted: boolean
  upvotes: number
}>();

const upvotesCount = ref(props.upvotes);
const isUpvoted = ref(props.upvoted);

const manageUpvotes = () => {
  isUpvoted.value === true
    ? upvotesCount.value--
    : upvotesCount.value++;
  isUpvoted.value = !isUpvoted.value;
}
</script>

<template>
  <div class="upvoted" :class="reverse ? 'reverse' : ''">
    <Button @click="manageUpvotes" :variant="isUpvoted
        ? 'secondary'
        : 'primary'">
      {{ isUpvoted ? 'Upvoted' : 'Upvote' }}
    </Button>
    <p>Upvoted {{ upvotesCount }} times</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/core/styles/mixins';

.upvoted {
  @include mixins.flex;
  align-items: center;
  &.reverse {
    flex-direction: row-reverse;
  }
  p {
    margin: 0;
  }
}
</style>