import {
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
  RequestTypeEnum,
} from '../interfaces/frontend';
// Avatar
export const GROUP_TABLE: ObjectToCode = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: 'group-table',
  title: 'Grupos',
  table: {
    id: 'group-table',
    title: 'Grupos',
    actions: {
      id: 'group-table-form',
      label: 'Grupos',
      elements: [
        {
          input: {
            label: 'Nome',
            name: 'name',
            placeholder: 'Pesquisar por nome',
            type: FormInputTypeEnum.Text,
          },
        },
      ],
    },
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Nome',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'Usuários',
        },
        row: {
          type: 'number',
          field: 'quantity',
        },
      },
      {
        column: {
          label: 'Interesses',
        },
        row: {
          type: 'string',
          field: 'preference',
        },
      },
    ],
    object: [
      {
        name: 'Deu match Salvador',
        quantity: 17,
        preference: '',
      },
      {
        name: 'Goiás é mais',
        quantity: 20,
        preference: '',
      },
      {
        name: 'Procurando novos amigos',
        quantity: 51,
        preference: '',
      },
      {
        name: 'Rock and roll',
        quantity: 9,
        preference: '',
      },
    ],
  },
};
