<template>
    <div class="dino-field">
        <label class="form-label">{{ configs?.label ?? '' }}</label>
        <div class="input-group">
            <div v-if="configs && configs.prefix" class="input-group-text">{{ configs.prefix }}</div>
            <select
                :class="[
                    'form-select',
                    isValid === true ? 'is-valid' : '',
                    isValid === false ? 'is-invalid' : ''
                ]"
                v-model="inputValue"
                v-bind="attributes">
                <optgroup v-if="configs.optgroups" v-for="optg in configs.optgroups" :key="optg.label" :label="optg.label">
                    <option v-for="pair in optg?.options" :key="pair.value" :value="pair.value">{{ pair.label }}</option>
                </optgroup>
                <option v-else v-for="pair in configs?.options" :key="pair.value" :value="pair.value">{{ pair.label }}</option>
            </select>
            <div v-if="configs && configs.suffix" class="input-group-text">{{ configs.suffix }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    interface IAttributes {
        placeholder?: string;
        required?: boolean | string;
        pattern?: string;
        [key: string]: any;
    }

    interface IOption {
        pair: string;
        value: string;
    }

    interface IOptgroup<T = IOption[]> {
        label: string;
        options: T;
    }

    interface IConfigs {
        prefix?: string;
        suffix?: string;
        label?: string;
        validation?: string;
        optgroups?: IOptgroup[];
        options?: IOption[];
    }

    const props = defineProps<{
        attributes?: IAttributes;
        configs?: IConfigs;
    }>();

    const inputValue = defineModel<any>();

    const isValid = computed<boolean | null>(() => {
        const regex = props.configs?.validation ? new RegExp(props.configs.validation, "u") : null;
        
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