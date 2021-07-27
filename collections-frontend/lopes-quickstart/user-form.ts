import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  FrontendFrameworkEnum,
  ObjectToCode,
} from '../../interfaces/frontend';

export const USER_FORM: ObjectToCode = {
  module: 'user',
  title: 'Usuário',
  frontendFramework: FrontendFrameworkEnum.Angular,
  projectPath: '/home/ryzzan/Projescts/Lopes/admin',
  comments: "What is 'expirationDate' about?",
  form: {
    label: 'Usuário',
    title: 'Usuário',
    elements: [
      {
        tabs: [
          {
            elements: [
              {
                input: {
                  label: 'CPF',
                  name: 'uniqueId',
                  placeholder: 'Apenas números',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Usuário',
                  name: 'username',
                  placeholder: 'Não entendi do que se trata',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  width: 380,
                },
              },
              {
                input: {
                  label: 'Data de expiração',
                  name: 'expirationDate',
                  placeholder: 'dd/mm/aaaa',
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Nome completo',
                  name: 'name',
                  placeholder: 'Nome completo',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  width: 380,
                },
              },
              {
                input: {
                  label: 'E-mail',
                  name: 'email',
                  placeholder: 'E-mail para conexão',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                select: {
                  label: 'Vínculo (Empresa)',
                  name: 'relatedCompany',
                  isMultiple: true,
                  optionsObject: [
                    {
                      label: 'Empresa 1',
                      value: 'Empresa 1',
                    },
                    {
                      label: 'Empresa 2',
                      value: 'Empresa 2',
                    },
                    {
                      label: 'Empresa 3',
                      value: 'Empresa 3',
                    },
                    {
                      label: 'Empresa 4',
                      value: 'Empresa 4',
                    },
                    {
                      label: 'Empresa 5',
                      value: 'Empresa 5',
                    },
                    {
                      label: 'Empresa 6',
                      value: 'Empresa 6',
                    },
                  ],
                  isRequired: true,
                },
              },
              {
                select: {
                  label: 'Área',
                  name: 'area',
                  isMultiple: true,
                  optionsObject: [
                    {
                      label: 'Área 1',
                      value: 'Área 1',
                    },
                    {
                      label: 'Área 2',
                      value: 'Área 2',
                    },
                    {
                      label: 'Área 3',
                      value: 'Área 3',
                    },
                    {
                      label: 'Área 4',
                      value: 'Área 4',
                    },
                    {
                      label: 'Área 5',
                      value: 'Área 5',
                    },
                    {
                      label: 'Área 6',
                      value: 'Área 6',
                    },
                  ],
                  isRequired: true,
                },
              },
            ],
            label: 'Dados pessoais',
          },
          {
            elements: [{}],
            label: 'Grupos associados',
          },
        ],
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
