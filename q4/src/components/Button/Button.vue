<script setup lang="ts">
const {
  disabled = false,
  variant = 'primary'
} = defineProps<{
  disabled?: boolean,
  variant?: 'primary' | 'secondary'
}>();
</script>

<template>
  <button
    @click="$emit('onClick')"
    :disabled="disabled"
    :class="variant"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use '@/core/styles/theme';
@use '@/core/styles/mixins';

@mixin primary {
  background-color: theme.$primary-color;
  color: theme.$light-color;
}

@mixin secondary {
  background-color: theme.$light-color;
  outline: 2px solid theme.$primary-color;
  color: theme.$dark-color;
}

button {
  @include mixins.rounded;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color .5s;
  padding: theme.$space-s;
  &.primary {
    @include primary;
    &:hover {
      @include secondary;
    }
  }
  &.secondary {
    @include secondary;
    &:hover {
      @include primary;
    }
  }
}
</style>