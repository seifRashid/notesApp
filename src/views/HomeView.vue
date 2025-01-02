<script setup>
import { ref } from 'vue'

// Reactive data
const noteContent = ref('')
const notes = ref([])

// Save note to localStorage
function saveNote() {
  if (noteContent.value.trim()) {
    // Get existing notes from localStorage or initialize an empty array
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    savedNotes.push(noteContent.value) // Add the new note
    localStorage.setItem('notes', JSON.stringify(savedNotes)) // Save to localStorage
    noteContent.value = '' // Clear the textarea
    loadNotes()
  } else {
    alert('Please write something before saving.')
  }
}

// Load notes from localStorage
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
  <div class="mt-4 mx-2">
    <h1 class="text-xl font-bold text-green-950 m-2">Note App</h1>
    <div class="flex flex-col gap-2 items-start">
      <textarea
        v-model="noteContent"
        placeholder="Write a note"
        class="w-1/2 bg-green-200 text-green-950 rounded-md p-3"
      ></textarea>
      <div class="flex gap-2">
        <button
          @click="saveNote"
          class="flex gap-1 p-2 rounded-md bg-green-200 hover:bg-green-300 border border-green-400 font-semibold shadow-sm hover:shadow-md"
        >
        <img alt="Vue logo" class="size-5" src="@/assets/buttonIcon.svg" />
        Save Note
        </button>
        <button
          @click="loadNotes"
          class=" flex gap-1 p-2 rounded-md bg-blue-200 hover:bg-blue-300 border border-blue-400 font-semibold shadow-sm hover:shadow-md"
        >
        <img alt="Vue logo" class="size-5" src="@/assets/load-list.svg" />
          Load Notes
        </button>
      </div>
    </div>
    <div v-if="notes.length">
      <h2 class="text-xl font-bold text-green-950 m-2">Saved Notes</h2>
      <ul>
        <li
          v-for="(note, index) in notes"
          :key="index"
          class="m-1 bg-green-200 p-2 rounded-md shadow-md w-[600px] flex gap-2 items-start"
        >
        <p>
          {{ note }}
        </p>
          <img
          @click="deleteNote(index)"
            alt="Vue logo"
            class="size-7 cursor-pointer bg-red-200 shadow-md border border-red-400 p-1 rounded-full"
            title="delete note"
            src="@/assets/delete.svg"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
