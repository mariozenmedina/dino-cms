<template>
    <main>
        <div class="container">
            <h1>Construction</h1>
            <component 
                class="mb-3"
                v-for="(field, idx) in fields"
                :key="idx"
                :is="field.component"
                :attributes="field.attributes"
                :options="field.options"
                v-model="field.value">
            </component>
        </div>
        <pre>{{ fields }}</pre>
    </main>
</template>

<script>
import FieldInput from './components/fields/FieldInput.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: "App",
    components: { FieldInput },
    data() {
        return {
            fields: [
                {
                    component: "FieldInput",
                    attributes: {
                        type: "text",
                        name: "nome",
                        placeholder: "insira seu nome",
                        required: "true",
                        pattern: "",
                        minlength: 0,
                        maxlength: 60,
                        size: null,
                        readonly: null,
                    },
                    options: {
                        label: "Text",
                        prefix: "Prefix",
                        suffix: "Suffix",
                        validation: "^[\\p{Letter}\\p{Mark}]+(?:\\s[\\p{Letter}\\p{Mark}]+)*$"
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "date",
                        name: "data",
                        required: "true",
                        readonly: null,
                    },
                    options: {
                        label: "Date",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "color",
                        name: "color",
                        required: "true",
                        readonly: null,
                    },
                    options: {
                        label: "Color",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "time",
                        name: "time",
                        required: "true",
                        readonly: null,
                    },
                    options: {
                        label: "Time",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "number",
                        name: "number",
                        required: "true",
                        min: 0,
                        max: 600,
                        step: 1,
                        readonly: null,
                    },
                    options: {
                        label: "Number",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "datetime-local",
                        name: "datetime",
                        required: "true",
                        min: 0,
                        max: 600,
                        step: 1,
                        readonly: null,
                    },
                    options: {
                        label: "Date-Time",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "password",
                        name: "password",
                        required: "true",
                        min: 0,
                        max: 600,
                        step: 1,
                        readonly: null,
                    },
                    options: {
                        label: "Password",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "url",
                        name: "url",
                        required: "true",
                        min: 0,
                        max: 600,
                        step: 1,
                        readonly: null,
                    },
                    options: {
                        label: "URL",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "email",
                        name: "email",
                        required: "true",
                        min: 0,
                        max: 600,
                        step: 1,
                        readonly: null,
                    },
                    options: {
                        label: "E-mail",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    value: ""
                },
            ]
        }
    }
};
</script>

<style lang="less" scoped>
</style>