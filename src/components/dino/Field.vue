<template>
    <component 
        class="mb-3"
        :component="component"
        :attributes="attributes"
        :options="options"
        :is="resolvedComponent"
        :fields="fields"
        v-model="inputValue">
    </component>
</template>

<script setup lang="ts">
    import FieldInput from '@/components/dino/fields/FieldInput.vue';
    import FieldRepeater from '@/components/dino/fields/FieldRepeater.vue';

    import { computed, onMounted, type Component } from 'vue';

    interface IAttributes {
        placeholder?: string;
        required?: boolean | string;
        pattern?: string;
        [key: string]: any; // Permite outros atributos dinâmicos
    }

    interface IOptions {
        prefix?: string;
        suffix?: string;
        label?: string;
        validation?: string;
    }

    interface IField {
        component: string;
        attributes?: IAttributes;
        options?: IOptions;
        fields?: IField[];
    }

    const props = defineProps<IField>();

    const inputValue = defineModel<any>();

    // Resolve component
    const resolvedComponent = computed<Component | null>(() => {
        const componentsMap: Record<string, Component> = {
            FieldInput, FieldRepeater // Add components as needed
        };
        return componentsMap[props.component] || null;
    });
</script>