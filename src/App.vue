<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex gap-5 mx-3 items-center mt-3">
      <img alt="Vue logo" class="size-8" src="@/assets/noteLogo.svg" />

      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->

        <nav>
          <div class="flex gap-5 items-center">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
