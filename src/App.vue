<template>
    <main>
        <div class="container">
            <h1>Construction</h1>
            <Field
                v-for="(field, idx) in fields"
                :key="idx"
                :component="field.component"
                :attributes="field.attributes"
                :options="field.options"
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
                    },
                    options: {
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
                        type: "color",
                        name: "data",
                        required: "true",
                        readonly: null,
                    },
                    options: {
                        label: "Color",
                        prefix: "Prefix",
                        suffix: "Suffix",
                    },
                    id: "id_unico_data"
                },
                {
                    component: "FieldRepeater",
                    options: {
                        label: "Repeater",
                        min: 0,
                        max: 5,
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
                            options: {
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
                            options: {
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