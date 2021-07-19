import {
  FrontendFrameworkEnum,
  ObjectToCode,
  RequestTypeEnum,
} from '../../interfaces/frontend';

export const PROJECT_TABLE: ObjectToCode = {
  module: 'projectTable',
  title: 'Projetos',
  frontendFramework: FrontendFrameworkEnum.Angular,
  projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
  table: {
    id: 'projectTable',
    title: 'Projetos',
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
          label: 'Localização',
        },
        row: {
          type: 'string',
          field: 'path',
        },
      },
      {
        column: {
          label: 'Módulos relacionados',
        },
        row: {
          type: 'string',
          field: 'modules',
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
                url: '/main/project/123',
              },
              label: 'Editar',
            },
            {
              action: {
                type: RequestTypeEnum.Dialog,
              },
              label: 'Remover',
              dialog: {
                templateFolder: 'remove-confirmation-dialog',
                id: 'remove-confirmation-dialog',
              },
            },
          ],
        },
      },
    ],
    object: [
      {
        modules: 'company, person, prospect',
        name: 'Kliento',
        path: '~/Projects/kliento',
      },
      {
        modules: 'component, module, project',
        name: 'MVP Express',
        path: '~/Projects/mvp-express',
      },
    ],
  },
};
