import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
} from '../../interfaces/frontend';

export const LOCATION_FORM: ObjectToCode = {
  module: 'location-form',
  title: 'Região',
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    id: 'location-form',
    label: 'Região',
    title: 'Região',
    elements: [
      {
        input: {
          label: 'Nome da região',
          name: 'locationName',
          placeholder: 'Defina a identificação do local',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: 'Latitude',
          name: 'latitude',
          placeholder: 'Latitude',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: 'Longitude',
          name: 'longitude',
          placeholder: 'Longitude',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: 'Raio',
          name: 'radius',
          placeholder: 'Em quilômêtros',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: 'Permissão',
          name: 'permission',
          placeholder: 'São Paulo - Não entendi',
          type: FormInputTypeEnum.Text,
          isRequired: true,
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
