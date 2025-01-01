<script setup>
import { ref } from 'vue'
import Vnote from '@/components/notesAppComponents/Vnote.vue'

const components = ref([]) // Array to track components

function addComponent() {
  components.value.push({}) // Add a new component entry
}
</script>

<template>
  <main>
    <div class="m-5">
      <button
        @click="addComponent"
        class="flex gap-1 bg-blue-500 py-2 px-3 rounded-lg text-white font-semibold border-blue-600"
      >
        <img alt="Vue logo" class="size-5" src="@/assets/buttonIcon.svg" />
        Create Note
      </button>
    </div>
    <!-- Notes container -->
    <div v-for="(component, index) in components" :key="index">
      <transition name="fade" appear mode="out-in">
        <Vnote />
      </transition>
    </div>
  </main>
</template>
<style scoped>
/* Transition Classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
