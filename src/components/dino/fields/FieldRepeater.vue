<template>
    <div class="dino-field">
        <label class="form-label">{{ options?.label ?? '' }}</label>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    interface Options {
        label?: string;
        min?: number;
        max?: number;
        [key: string]: any; // Permite outros atributos dinâmicos
    }

    const props = defineProps<{
        fields?: Array;
        options?: Options;
    }>();

    const inputValue = defineModel<string | number>();

    const isValid = computed<boolean | null>(() => {
        const regex = props.options?.validation ? new RegExp(props.options.validation, "u") : null;
        
        if (regex && inputValue.value) {
            return regex.test(inputValue.value);
        } 
        
        if (props.attributes?.required === true || props.attributes?.required === "true") {
            return inputValue.value !== "";
        }

        return null;
    });
</script>

<style scoped lang="less">
input{
    height: auto;
}
</style>