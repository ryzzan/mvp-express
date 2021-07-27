import {
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
  RequestTypeEnum,
  ServiceFunctionsEnum,
} from '../../interfaces/frontend';

export const PERSON_TABLE: ObjectToCode = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: 'person',
  title: 'Pessoas',
  projectPath: '/home/ryzzan/Projects/Kunlatek/test',
  table: {
    title: 'Usuários',
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
          label: 'Nascimento',
        },
        row: {
          type: 'date',
          field: 'birthday',
        },
      },
      {
        column: {
          label: 'Gênero',
        },
        row: {
          type: 'string',
          field: 'gender',
        },
      },
      {
        column: {
          label: 'E-mail',
        },
        row: {
          type: 'string',
          field: 'email',
        },
      },
      {
        column: {
          label: 'Preferências',
        },
        row: {
          type: 'string',
          field: 'preferences',
        },
      },
      {
        column: {
          label: 'Ações',
        },
        row: {
          type: 'menu',
          icon: 'more_vert',
          menu: [
            {
              action: {
                type: RequestTypeEnum.Api,
                url: '/main/person/123',
              },
              label: 'Bloquear',
            },
            // {
            //   action: {
            //     type: RequestTypeEnum.Dialog,
            //   },
            //   label: 'Remover',
            //   dialog: {
            //     templateFolder: 'remove-confirmation-dialog',
            //     id: 'remove-confirmation-dialog',
            //   },
            // },
          ],
        },
      },
    ],
    actions: {
      label: 'Pesquisa de pessoas',
      elements: [
        {
          input: {
            label: 'Nome',
            placeholder: 'Pesquisar por nome',
            name: 'name',
            type: FormInputTypeEnum.Text,
          },
        },
        {
          select: {
            label: 'Gênero',
            name: 'gender',
            optionsObject: [
              {
                label: 'Masculino',
                value: 'masculino',
              },
              {
                label: 'Feminino',
                value: 'feminino',
              },
            ],
          },
        },
        {
          select: {
            label: 'Preferências',
            name: 'preferences',
            isMultiple: true,
            optionsObject: [
              {
                label: 'Administração e gestão',
                value: 'Administração e gestão',
              },
              {
                label: 'Agropecuária',
                value: 'Agropecuária',
              },
              {
                label: 'Animais',
                value: 'Animais',
              },
              {
                label: 'Arquitetura',
                value: 'Arquitetura',
              },
              {
                label: 'Arte',
                value: 'Arte',
              },
              {
                label: 'Aviação',
                value: 'Aviação',
              },
              {
                label: 'Balada',
                value: 'Balada',
              },
              {
                label: 'Caça e pesca',
                value: 'Caça e pesca',
              },
              {
                label: 'Café',
                value: 'Café',
              },
              {
                label: 'Carros e motos',
                value: 'Carros e motos',
              },
              {
                label: 'Decoração',
                value: 'Decoração',
              },
              {
                label: 'Empreendedorismo',
                value: 'Empreendedorismo',
              },
              {
                label: 'Engenharia',
                value: 'Engenharia',
              },
              {
                label: 'Espiritualidade',
                value: 'Espiritualidade',
              },
            ],
          },
        },
      ],
    },
    service: {
      baseUrl: 'localhost:3000',
      endPoint: 'people',
      methods: [
        ServiceFunctionsEnum.Get,
        ServiceFunctionsEnum.Delete,
        ServiceFunctionsEnum.Save,
        ServiceFunctionsEnum.Update,
        ServiceFunctionsEnum.Find,
      ]
    },
  },
};