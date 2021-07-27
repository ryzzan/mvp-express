import {
  BackendFrameworkEnum,
  FormButtonTypeEnum,
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
  ServiceFunctionsEnum,
} from '../../interfaces/frontend';

export const PROJECT_FORM: ObjectToCode = {
  module: 'project',
  title: 'Projeto',
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Nest,
  projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
  form: {
    label: 'Projeto',
    title: 'Projeto',
    elements: [
      {
        input: {
          label: 'Nome do arquivo',
          name: 'projectId',
          placeholder: 'Ex.: my-project, project-backoffice',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: 'Nome do projeto',
          name: 'projectName',
          placeholder: 'Ex.: My Project, Project Backoffice',
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        select: {
          label: 'Módulos correspondentes',
          name: 'modules',
          isMultiple: true,
          optionsObject: [
            {
              label: 'company',
              value: 'company',
            },
            {
              label: 'component',
              value: 'component',
            },
            {
              label: 'module',
              value: 'module',
            },
            {
              label: 'person',
              value: 'person',
            },
            {
              label: 'project',
              value: 'project',
            },
            {
              label: 'prospect',
              value: 'prospect',
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
    service: {
      baseUrl: 'localhost',
      endPoint: 'project',
      methods: [
        ServiceFunctionsEnum.Get,
        ServiceFunctionsEnum.Delete,
        ServiceFunctionsEnum.Save,
        ServiceFunctionsEnum.Update,
        ServiceFunctionsEnum.Find,
      ],
    },
  },
};
