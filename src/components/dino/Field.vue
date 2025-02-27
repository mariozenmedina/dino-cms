<template>
    <component 
        class="mb-3"
        :component="component"
        :attributes="attributes"
        :configs="configs"
        :is="resolvedComponent"
        :fields="fields"
        v-model="inputValue">
    </component>
</template>

<script setup lang="ts">
    import FieldInput from '@/components/dino/fields/FieldInput.vue';
    import FieldRepeater from '@/components/dino/fields/FieldRepeater.vue';
    import FieldSelect from '@/components/dino/fields/FieldSelect.vue';

    import { computed, onMounted, type Component } from 'vue';

    interface IAttributes {
        placeholder?: string;
        required?: boolean | string;
        pattern?: string;
        [key: string]: any;
    }

    interface IConfigs {
        prefix?: string;
        suffix?: string;
        label?: string;
        validation?: string;
    }

    interface IField {
        component: string;
        attributes?: IAttributes;
        configs?: IConfigs;
        fields?: IField[];
    }

    const props = defineProps<IField>();

    const inputValue = defineModel<any>();

    const resolvedComponent = computed<Component | null>(() => {
        const componentsMap: Record<string, Component> = {
            FieldInput, FieldRepeater, FieldSelect
        };
        return componentsMap[props.component] || null;
    });
</script>