<template>
    <nav>
      <RouterLink to="/">Construction</RouterLink> |
      <RouterLink to="/collections">Collections</RouterLink>
    </nav>
    
    <main>
      <RouterView />
    </main>
  </template>

<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router';
</script>