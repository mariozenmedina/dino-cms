<template>
    <div class="dino-field w-100">
        <label class="form-label w-100">{{ configs?.label ?? '' }}</label>
        <div class="input-group">
            <div v-if="configs && configs.prefix" class="input-group-text">{{ configs.prefix }}</div>
            <textarea v-if="attributes?.type=='textarea'"
                :class="[
                    'form-control',
                    isValid === true ? 'is-valid' : '',
                    isValid === false ? 'is-invalid' : ''
                ]"
                v-model="inputValue"
                v-bind="attributes">
            </textarea>
            <input v-else
                :class="[
                    'form-control',
                    isValid === true ? 'is-valid' : '',
                    isValid === false ? 'is-invalid' : ''
                ]"
                :list="uuid"
                v-model="inputValue"
                v-bind="attributes" />
            
            <datalist :id="uuid" v-if="configs?.datalist">
                <option v-for="item in configs?.datalist" :key="item" :value="item"></option>
            </datalist>

            <div v-if="configs && configs.suffix" class="input-group-text">{{ configs.suffix }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, getCurrentInstance } from 'vue';

    const instance = getCurrentInstance();
    const uuid = ref('comp-'+instance.uid);

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