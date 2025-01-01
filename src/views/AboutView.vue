<template>
  <div>
    <button @click="addComponent">Add Component</button>
    <div v-for="(component, index) in components" :key="index">
      <div ref="notesContainer" class="flex flex-col gap-2 items-start m-5">
        <Vnote />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Vnote from '@/components/notesAppComponents/Vnote.vue'

const components = ref([]) // Array to track components

function addComponent() {
  components.value.push({}) // Add a new component entry
}
</script>
