<template>
    <div class="input-group">
        <div v-if="options && options.prefix" class="input-group-text">{{ options.prefix }}</div>
        <div class="form-floating">
            <input
                :class="[
                    'form-control',
                    isValid === true ? 'is-valid' : '',
                    isValid === false ? 'is-invalid' : ''
                ]"
                type="text"
                v-model="inputValue"
                v-bind="attributes" />
            <label>{{ options?.label ?? '' }}</label>
        </div>
        <div v-if="options && options.suffix" class="input-group-text">{{ options.suffix }}</div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

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

    const props = defineProps<{
        attributes?: Attributes;
        options?: Options;
    }>();

    const inputValue = defineModel<string>();

    const isValid = computed<boolean | null>(() => {
        const regex = props.options?.validation ? new RegExp(props.options.validation, "u") : null;
        
        if (regex && inputValue.value) {
            return regex.test(inputValue.value);
        } 
        
        if (props.attributes?.required === true || props.attributes?.required === "true") {
            return inputValue.value.trim() !== "";
        }

        return null;
    });
</script>

<style scoped lang="less">
</style>