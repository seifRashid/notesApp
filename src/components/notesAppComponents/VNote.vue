<script setup>
import { ref } from 'vue'

const showNote = ref(true)
const noteContainer = ref('')

function updateStorage(){
  localStorage.setItem('noteContainer', noteContainer.value)
}

function deleteNote(){
  // localStorage.removeItem('noteContainer')
  showNote.value = false
}

</script>
<template>
  <div  class="flex flex-col gap-2 items-start m-5" v-show="showNote">
  <div class="flex flex-col items-start">
    <p class="text-blue-800 text-lg font-semibold">Subject</p>
    <p ref="noteSubject" contenteditable="true" class="p-2 bg-blue-300 w-[150px] h-auto font-semibold rounded-md">
      Subject
    </p>
  </div>
  <div class="flex gap-1">
    <p
    @keyup="updateStorage"
      ref="noteContainer"
      contenteditable="true"
      title="Write down whats on your mind"
      class="p-2 bg-blue-300 w-[600px] h-[150px] rounded-md relative"
    ></p>
    <img
      @click="deleteNote"
      alt="Vue logo"
      class="size-5 cursor-pointer"
      title="delete note"
      src="@/assets/delete.svg"
    />
  </div>
</div>
</template>
<style scoped></style>
