<script setup></script>

<template>
  <main>
    <div class="m-5">
      <button
      @click="console.log('hello')"
        class="flex gap-1 bg-blue-500 py-2 px-3 rounded-lg text-white font-semibold border-blue-600"
      >
        <img alt="Vue logo" class="size-5" src="@/assets/buttonIcon.svg" />
        Create Note
      </button>
    </div>
  </main>
</template>
