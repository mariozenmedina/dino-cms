<template>
    <DinoHeader></DinoHeader>
    <DinoAside></DinoAside>
    <main>
        <div class="container-fluid">
            <h2 class="b-left">Construction</h2>
            <Field
                v-for="(field, idx) in fields"
                :key="idx"
                :component="field.component"
                :attributes="field.attributes"
                :configs="field.configs"
                :fields="field.fields"
                v-model="values[field.id]">
            </Field>
            <div>
                <pre>{{ values }}</pre>
            </div>
        </div>
    </main>    
</template>

<script setup lang="ts">
import Field from '@/components/dino/Field.vue';
import DinoHeader from '@/components/screens/layouts/Header.vue';
import DinoAside from '@/components/screens/layouts/Aside.vue';

import { ref, onMounted } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';

const fields = ref([
    {
        component: "FieldInput",
        attributes: {
            type: "textarea",
            name: "nome",
            placeholder: "insira seu nome",
            required: "true",
            pattern: "",
            minlength: 0,
            maxlength: 60,
            size: null,
            readonly: null,
            rows: 5,
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
            rows: 5,
        },
        configs: {
            label: "Text",
            prefix: "Prefix",
            suffix: "Suffix",
            validation: "^[\\p{Letter}\\p{Mark}]+(?:\\s[\\p{Letter}\\p{Mark}]+)*$",
            datalist: ['Chocolate', 'Coconut', 'Mint', 'Strawberry', 'Vanilla'],
        },
        id: "id_unico_texto2"
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
]);

const values = ref({});

onMounted(() => {
    fields.value.forEach(i => {
        values.value[i.id] = [];
    });
});
</script>

<style lang="less" scoped>
main{
    .bbranco; margin-left: 40px;
    padding: 10px 0;
    @media (min-width: 992px) {
        margin-left: 180px; .p20;
    }
}
</style>