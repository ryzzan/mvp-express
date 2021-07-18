import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
} from '../../interfaces/frontend';

export const COMPONENT_FORM: ObjectToCode = {
  module: 'component-form',
  title: 'Componente',
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    id: 'component-form',
    label: 'Componentes',
    title: 'Componente',
    elements: [
      {
        input: {
          type: FormInputTypeEnum.Text,
          name: 'componentId',
          isRequired: true,
          label: 'Nome do arquivo',
          placeholder: 'Ex.: component-form, component-table',
          width: 380,
        },
      },
      {
        select: {
          label: 'Tipo de componente',
          name: 'componentType',
          isRequired: true,
          optionsObject: [
            {
              label: 'Formulário',
              value: 'form',
            },
            {
              label: 'Tabela',
              value: 'table',
            },
          ],
        },
      },
      {
        array: {
          id: 'form-elements',
          label: 'Elementos do formulário',
          title: 'Elementos do formulário',
          elements: [
            {
              select: {
                label: 'Tipo de elemento',
                name: 'formElement',
                optionsObject: [
                  {
                    label: 'input',
                    value: 'input',
                  },
                  {
                    label: 'select',
                    value: 'select',
                  },
                  {
                    label: 'button',
                    value: 'button',
                  },
                  {
                    label: 'checkbox',
                    value: 'checkbox',
                  },
                  {
                    label: 'radio',
                    value: 'radio',
                  },
                  {
                    label: 'autocomplete',
                    value: 'autocomplete',
                  },
                  {
                    label: 'range',
                    value: 'range',
                  },
                  {
                    label: 'array',
                    value: 'array',
                  },
                ],
              },
            },
            {
              input: {
                label: 'Nome do elemento',
                name: 'name',
                placeholder: 'Ex.: name, productName',
                type: FormInputTypeEnum.Text,
              },
            },
            {
              input: {
                label: 'Label do elemento',
                name: 'label',
                placeholder: 'Ex.: Nome, Nome do produto',
                type: FormInputTypeEnum.Text,
                width: 380,
              },
            },
            {
              input: {
                label: 'Placeholder do elemento',
                name: 'placeholder',
                placeholder: 'Ex.: Nome completo, Nome completo do produto',
                type: FormInputTypeEnum.Text,
                width: 380,
              },
            },
            {
              select: {
                label: 'Tipagem do elemento',
                name: 'type',
                condition: "formElement === 'input'",
                optionsObject: [
                  {
                    label: 'Texto',
                    value: FormInputTypeEnum.Text,
                  },
                  {
                    label: 'Data',
                    value: FormInputTypeEnum.Date,
                  },
                  {
                    label: 'Número',
                    value: FormInputTypeEnum.Number,
                  },
                  {
                    label: 'E-mail',
                    value: FormInputTypeEnum.Email,
                  },
                  {
                    label: 'Senha',
                    value: FormInputTypeEnum.Password,
                  },
                  {
                    label: 'Arquivo',
                    value: FormInputTypeEnum.File,
                  },
                  {
                    label: 'Escondido',
                    value: FormInputTypeEnum.Hidden,
                  },
                  {
                    label: 'Telefone',
                    value: FormInputTypeEnum.Tel,
                  },
                  {
                    label: 'Data, hora e local',
                    value: FormInputTypeEnum.DatetimeLocal,
                  },
                  {
                    label: 'Cor',
                    value: FormInputTypeEnum.Color,
                  },
                  {
                    label: 'Mês',
                    value: FormInputTypeEnum.Month,
                  },
                  {
                    label: 'Tempo',
                    value: FormInputTypeEnum.Time,
                  },
                  {
                    label: 'URL',
                    value: FormInputTypeEnum.Url,
                  },
                  {
                    label: 'Semana',
                    value: FormInputTypeEnum.Week,
                  },
                ],
              },
            },
            {
              input: {
                label: 'Largura',
                name: 'width',
                placeholder: 'Ex.: 380',
                type: FormInputTypeEnum.Text,
              },
            },
          ],
        },
      },
    ],
    actions: [
      {
        button: {
          type: FormButtonTypeEnum.Submit,
          label: 'Criar',
        },
      },
    ],
  },
};
