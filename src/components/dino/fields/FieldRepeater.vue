<template>
    <div class="dino-field">
        <label class="form-label">{{ configs?.label ?? '' }}</label>
        <div v-for="(row, rowIdx) in inputValue" class="d-flex">
            <Field
                v-for="(field, idx) in fields"
                :key="idx"
                :component="field.component"
                :attributes="field.attributes"
                :configs="field.configs"
                :fields="field.fields"
                v-model="inputValue[rowIdx][field.id]">
            </Field>
        </div>
        <button @click="addRow">Add row</button>
    </div>
</template>

<script setup lang="ts">
    import Field from '@/components/dino/Field.vue';

    import { ref, onMounted } from 'vue';

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

    function addRow() {
        let newRow = {}
        props.fields?.forEach(field => {
            newRow[field.id] = [];
        });
        inputValue.value.push(newRow);
    }
</script>

<style scoped lang="less">
</style>