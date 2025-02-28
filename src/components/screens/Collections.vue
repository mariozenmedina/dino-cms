<template>
    <DinoHeader></DinoHeader>
    <DinoAside></DinoAside>
    <main>
        <div class="container-fluid">
            <h2>Collections</h2>
        </div>
    </main>
</template>

<script setup lang="ts">
import DinoHeader from '@/components/screens/layouts/Header.vue';
import DinoAside from '@/components/screens/layouts/Aside.vue';
import { RouterLink } from 'vue-router';
</script>

<style lang="less" scoped>
main{
    .bbranco; margin-left: 200px;
    min-height: 6000px; padding: 20px;
}
</style>