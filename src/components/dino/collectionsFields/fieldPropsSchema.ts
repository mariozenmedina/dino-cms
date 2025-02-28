import { EAttributes, EConfigs, EComponents } from "../../../types";

export const fieldPropsSchema = {
    attributes: {
        name: {
            title: 'Name',
            description: 'This is the name of the component',
            fields: [
                {
                    propName: EAttributes.Name,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    }
                }
            ]
        },
        placeholder: {
            title: 'Placeholder',
            description: 'This is the placeholder of the component',
            fields: [
                {
                    propName: EAttributes.Placeholder,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    }
                }
            ]
        },
        required: {
            title: 'Required',
            description: '',
            fields: [
                {
                    propName: EAttributes.Required,
                    component: EComponents.FieldSelect,
                    configs: {
                        options: [
                            { label: 'True', value: 'true' },
                            { label: 'False', value: 'false' }
                        ]
                    },
                }
            ]
        },
        pattern: {
            title: 'Pattern',
            description: 'This is the pattern of the component',
            fields: [
                {
                    propName: EAttributes.Pattern,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        length: {
            title: 'Lenght',
            description: 'To define the min and max length of the component',
            fields: [
                {
                    propName: EAttributes.Minlength,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'number',
                    },
                    configs: {
                        prefix: 'minLength'
                    }
                },
                {
                    propName: EAttributes.Maxlength,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'number',
                    },
                    configs: {
                        prefix: 'maxLength'
                    }
                }
            ]
        },
        size: {
            title: 'Size',
            description: 'This is to set the size of the component',
            fields: [
                {
                    propName: EAttributes.Size,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        readonly: {
            title: 'Read only?',
            description: '',
            fields: [
                {
                    propName: EAttributes.Readonly,
                    component: EComponents.FieldSelect,
                    configs: {
                        options: [
                            { label: 'True', value: 'true' },
                            { label: 'False', value: 'false' }
                        ]
                    },
                }
            ]
        },
        rows: {
            title: 'Rows',
            description: 'This is to set the quantity of rows of the component',
            fields: [
                {
                    propName: EAttributes.Rows,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'number',
                    },
                }
            ]
        },
    },
    configs: {
        label: {
            title: 'Label',
            description: 'This is the label of the component',
            fields: [
                {
                    propName: EConfigs.Label,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        min: {},
        max: {},
        prefix: {
            title: 'Prefix',
            description: 'Appears before the input',
            fields: [
                {
                    propName: EConfigs.Prefix,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        suffix: {
            title: 'Suffix',
            description: 'Appears after the input',
            fields: [
                {
                    propName: EConfigs.Suffix,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        validation: {
            title: 'Validation',
            description: 'The redix code to validate the input field.',
            fields: [
                {
                    propName: EConfigs.Validation,
                    component: EComponents.FieldInput,
                    attributes: {
                        type: 'text',
                    },
                }
            ]
        },
        datalist: {},
        optgroups: {},
        option: {},
    }
}