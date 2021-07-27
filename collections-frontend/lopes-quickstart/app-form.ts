import {
    FormButtonTypeEnum,
    FormInputTypeEnum,
    FrontendFrameworkEnum,
    ObjectToCode,
  } from '../../interfaces/frontend';
  
  export const APPLICATION_FORM: ObjectToCode = {
    module: 'application',
    title: 'Aplicação',
    frontendFramework: FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projescts/Lopes/admin',
    form: {
      label: 'Aplicação',
      title: 'Aplicação',
      elements: [
        {
          input: {
            label: 'Identificador do aplicativo',
            name: 'appId',
            placeholder: 'Ex.: admin',
            type: FormInputTypeEnum.Text,
            isRequired: true,
          },
        },
        {
          input: {
            label: 'Título para o aplicativo',
            name: 'appTitle',
            placeholder: 'Latitude',
            type: FormInputTypeEnum.Text,
            isRequired: true,
          },
        },
        {
            array: {
                label: 'Funcionalidade',
                elements: [{
                    input: {
                        label: 'Identificador da funcionalidade',
                        placeholder: 'Ex.: user',
                        type: FormInputTypeEnum.Text,
                        name: 'funcionalityId',
                        isRequired: true,
                    }
                }, {
                    input: {
                        label: 'Título para funcionalidade',
                        placeholder: 'Ex.: Administração',
                        type: FormInputTypeEnum.Text,
                        name: 'functionalityTitle',
                        isRequired: true,
                    }
                }]
            }
        }
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
  