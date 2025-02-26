<template>
    <component 
        class="mb-3"
        :attributes="attributes"
        :options="options"
        :is="resolvedComponent"
        v-model="inputValue">
    </component>
</template>

<script setup lang="ts">
    import FieldInput from '@/components/dino/fields/FieldInput.vue';

    import { computed, onMounted, type Component } from 'vue';

    interface Attributes {
        placeholder?: string;
        required?: boolean | string;
        pattern?: string;
        [key: string]: any; // Permite outros atributos dinâmicos
    }

    interface Options {
        prefix?: string;
        suffix?: string;
        label?: string;
        validation?: string;
    }

    interface Field {
        component: string;
        attributes?: Attributes;
        options?: Options;
        fields?: Field[];
    }

    const props = defineProps<Field>();

    const inputValue = defineModel<string | number>();

    // Resolve component
    const resolvedComponent = computed<Component | null>(() => {
        const componentsMap: Record<string, Component> = {
            FieldInput, // Add components as needed
        };
        return componentsMap[props.component] || null;
    });
</script>