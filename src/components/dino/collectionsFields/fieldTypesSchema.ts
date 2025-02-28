import { EFieldTypes, EComponents, EAttributes, EConfigs } from "../../../types"

export interface IFieldProps {
  attributes?: {
    [key: string]: string
  }
  configs?: {
    [key: string]: string
  }
}

export interface IFieldTypesSchema {
  fieldType: EFieldTypes
  component: EComponents
  fieldProps: IFieldProps
}


const { Length, Name, Pattern, Placeholder, Readonly, Required, Rows, Size } = EAttributes
const { Datalist, Label, Max, Min, Optgroups, Options, Prefix, Suffix, Validation } = EConfigs

export const fieldTypesSchema: IFieldTypesSchema[] = [
  {
    fieldType: EFieldTypes.Text,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Text,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Pattern]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
        [Validation]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Number,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Number,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Pattern]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
        [Validation]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Color,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Color,
        [Name]: '',
        [Required]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Date,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Date,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Email,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Email,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Password,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Password,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
        [Validation]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.TextArea,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.TextArea,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Pattern]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
        [Rows]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
        [Validation]: '',
      }
    }
  },
  {
    fieldType: EFieldTypes.Url,
    component: EComponents.FieldInput,
    fieldProps: {
      attributes: {
        type: EFieldTypes.Url,
        [Name]: '',
        [Placeholder]: '',
        [Required]: '',
        [Pattern]: '',
        [Length]: '',
        [Size]: '',
        [Readonly]: '',
      },
      configs: {
        [Label]: '',
        [Prefix]: '',
        [Suffix]: '',
        [Validation]: '',
      }
    }
  }
]