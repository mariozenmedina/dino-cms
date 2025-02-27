<template>
    <main>
        <div class="container">
            <h1>Construction</h1>
            <Field
                v-for="(field, idx) in fields"
                :key="idx"
                :component="field.component"
                :attributes="field.attributes"
                :configs="field.configs"
                :fields="field.fields"
                v-model="values[field.id]">
            </Field>
        </div>
        <pre>{{ values }}</pre>
    </main>
</template>

<script>
import Field from '@/components/dino/Field.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: "App",
    components: { Field },
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
                        rows: 10,
                    },
                    configs: {
                        label: "Text",
                        prefix: "Prefix",
                        suffix: "Suffix",
                        validation: "^[\\p{Letter}\\p{Mark}]+(?:\\s[\\p{Letter}\\p{Mark}]+)*$",
                        datalist: ['Chocolate', 'Coconut', 'Mint', 'Strawberry', 'Vanilla'],
                    },
                    id: "id_unico_texto"
                },
                {
                    component: "FieldSelect",
                    attributes: {
                        name: "select",
                        required: "true",
                    },
                    configs: {
                        label: "Select",
                        prefix: "Prefix",
                        suffix: "Suffix",
                        optgroups: [
                            {
                                label: "Option group",
                                options: [
                                    { label: "Option 1", value: "option1"},
                                    { label: "Option 2", value: "option2"},
                                    { label: "Option 3", value: "option3"},
                                ],
                            },
                            {
                                label: "Option group 2",
                                options: [
                                    { label: "Option 1", value: "option1"},
                                    { label: "Option 2", value: "option2"},
                                    { label: "Option 3", value: "option3"},
                                ],
                            },
                        ],
                        options: [
                            { label: "Option 1", value: "option1"},
                            { label: "Option 2", value: "option2"},
                            { label: "Option 3", value: "option3"},
                        ],
                    },
                    id: "id_unico_select"
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "color",
                        name: "data",
                        required: "true",
                        readonly: null,
                    },
                    configs: {
                        label: "Color",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    id: "id_unico_data"
                },
                {
                    component: "FieldInput",
                    attributes: {
                        type: "password",
                        name: "pass",
                        required: "true",
                        readonly: null,
                    },
                    configs: {
                        label: "Password",
                        prefix: "R$",
                        suffix: ",00",
                    },
                    id: "id_unico_pass"
                },
                {
                    component: "FieldRepeater",
                    configs: {
                        label: "Repeater",
                        min: 0,
                        max: 5,
                        addRowLabel: "Add repeater",
                    },
                    fields: [
                        {
                            component: "FieldRepeater",
                            configs: {
                                label: "Repeater",
                                min: 0,
                                max: 5,
                                addRowLabel: "Add group",
                            },
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
                                    configs: {
                                        label: "Text",
                                        prefix: "Prefix",
                                        suffix: "Suffix",
                                        validation: "^[\\p{Letter}\\p{Mark}]+(?:\\s[\\p{Letter}\\p{Mark}]+)*$"
                                    },
                                    id: "id_unico_texto"
                                },
                                {
                                    component: "FieldInput",
                                    attributes: {
                                        type: "date",
                                        name: "data",
                                        required: "true",
                                        readonly: null,
                                    },
                                    configs: {
                                        label: "Date",
                                        prefix: "Prefix",
                                        suffix: "Suffix",
                                    },
                                    id: "id_unico_data"
                                },
                            ],
                            id: "id_unico_repater"
                        }
                    ],
                    id: "id_unico_repater"
                }
            ],
            values: {}
        }
    },
    mounted() {
        this.fields.forEach(i => {
            this.values[i.id] = [];
        });
    },
};
</script>

<style lang="less" scoped>
</style>