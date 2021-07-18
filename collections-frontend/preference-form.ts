import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
} from '../interfaces/frontend';

export const PREFERENCE_FORM: ObjectToCode = {
  module: 'preference-form',
  title: 'Interesses',
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Interesse',
    label: 'Interesse',
    id: 'preference-form',
    elements: [
      {
        input: {
          label: 'Nome',
          name: 'name',
          placeholder: 'Nome do interesse',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
    ],
    actions: [
      {
        button: {
          label: 'Criar',
          type: FormButtonTypeEnum.Submit,
        },
      },
    ],
  },
};
