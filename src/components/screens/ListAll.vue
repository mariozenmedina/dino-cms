<template>
    <DinoHeader></DinoHeader>
    <DinoAside></DinoAside>
    <main>
        <div class="container-fluid">
            <h2 class="b-left">List all Collections</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td><strong>Primary field</strong></td>
                        <td><strong>Author</strong></td>
                        <td><strong>Last edited</strong></td>
                        <td><strong>Edit</strong></td>
                        <td><strong>Remove</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>aliquam consectetur iste placeat aliquid distinctio soluta dolore perferendis quo.</td>
                        <td>Mário</td>
                        <td>2025-02-27 23:40</td>
                        <td><a class="btn btn-leaf"><i class="bi bi-pencil-square"></i></a></td>
                        <td><a class="btn btn-danger"><i class="bi bi-x-circle"></i></a></td>
                    </tr>
                    <tr>
                        <td>Repudiandae sequi cum unde voluptate ex voluptates amet rem.</td>
                        <td>Mário</td>
                        <td>2025-02-27 23:40</td>
                        <td><a class="btn btn-leaf"><i class="bi bi-pencil-square"></i></a></td>
                        <td><a class="btn btn-danger"><i class="bi bi-x-circle"></i></a></td>
                    </tr>
                    <tr>
                        <td>Culpa, officia impedit?</td>
                        <td>Mário</td>
                        <td>2025-02-27 23:40</td>
                        <td><a class="btn btn-leaf"><i class="bi bi-pencil-square"></i></a></td>
                        <td><a class="btn btn-danger"><i class="bi bi-x-circle"></i></a></td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                        <td>Mário</td>
                        <td>2025-02-27 23:40</td>
                        <td><a class="btn btn-leaf"><i class="bi bi-pencil-square"></i></a></td>
                        <td><a class="btn btn-danger"><i class="bi bi-x-circle"></i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>    
</template>

<script setup lang="ts">
import DinoHeader from '@/components/screens/layouts/Header.vue';
import DinoAside from '@/components/screens/layouts/Aside.vue';
</script>

<style lang="less" scoped>
main{
    .bbranco; margin-left: 40px;
    padding: 10px 0;
    @media (min-width: 992px) {
        margin-left: 180px; .p20;
    }
}
</style>