<script setup lang="ts">
export type Variant = 'primary' | 'secondary' | undefined;
const {
  disabled = false,
  variant = 'primary'
} = defineProps<{
  disabled?: boolean,
  variant?: Variant
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

@mixin disabled {
  background-color: theme.$grey-color;
  color: theme.$dark-color;
  outline: 0;
  cursor: default;
  pointer-events: none;
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
  &:disabled {
    @include disabled;
    &:hover {
      @include disabled;
    }
  }
}
</style>