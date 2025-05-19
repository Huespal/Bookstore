<script setup lang="ts">
import Button from '@/components/Button/Button.vue';

const {
  reverse = false
} = defineProps<{
  reverse?: boolean,
  upvoted: boolean
  upvotes: number
}>();
</script>

<template>
  <div class="upvoted" :class="reverse ? 'reverse' : ''">
    <Button @click="$emit('onClick')" :variant="upvoted
        ? 'secondary'
        : 'primary'">
      {{ upvoted ? 'Upvoted' : 'Upvote' }}
    </Button>
    <p>Upvoted {{ upvotes }} times</p>
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