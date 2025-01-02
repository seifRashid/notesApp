<script setup>
import { ref } from 'vue';


const editNote = ref(false)

defineProps({
  note:Array
})

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
  notes.value = savedNotes // Update reactive state with loaded notes
}

function deleteNote(index){
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
  savedNotes.splice(index, 1)
  localStorage.setItem('notes', JSON.stringify(savedNotes))
  loadNotes()
}
</script>
<template>
  <p class="text-xl font-semibold text-green-900" >
          title: <span class="bg-white p-1 rounded-md" >{{ note.title }}</span>
        </p>
        <p :contenteditable="editNote" class="outline-0" @click="editNote = true" >
          {{ note.content }}
        </p>
        <div class="flex gap-2 w-full items-center justify-end">
          <p class="text-xs text-green-950 font-bold" >{{ dayjs(note.time).fromNow() }}</p>
          <img
          @click="deleteNote(index)"
            alt="Vue logo"
            class="size-7 cursor-pointer bg-red-200 shadow-md border border-red-400 p-1 rounded-full"
            title="delete note"
            src="@/assets/delete.svg"
          />
          <img
          v-show="editNote"
            alt="Vue logo"
            class="size-7 cursor-pointer bg-blue-200 shadow-md border border-blue-400 p-1 rounded-full"
            title="delete note"
            src="@/assets/delete.svg"
          />
        </div>
</template>
