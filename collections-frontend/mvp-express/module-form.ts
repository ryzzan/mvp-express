import { FormButtonTypeEnum, FormInputTypeEnum, FrontendFrameworkEnum, ObjectToCode } from "../../interfaces/frontend";

export const MODULE_FORM: ObjectToCode = {
    module: 'module-form',
    title: 'Módulo',
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        id: 'module-form',
        label: 'Módulo',
        title: 'Módulo',
        elements: [{
            input: {
                type: FormInputTypeEnum.Text,
                label: 'Nome do arquivo',
                name: 'moduleId',
                placeholder: 'Ex.: component, person, company',
                isRequired: true
            }
        }, {
            select: {
                label: 'Componentes relacionados',
                name: 'compoenents',
                isMultiple: true,
                optionsObject: [{
                    label: 'company-form',
                    value: 'company-form',
                }, {
                    label: 'company-table',
                    value: 'company-table',
                }, {
                    label: 'component-form',
                    value: 'component-form',
                }, {
                    label: 'component-table',
                    value: 'component-table',
                }, {
                    label: 'module-form',
                    value: 'module-form',
                }, {
                    label: 'module-table',
                    value: 'module-table',
                }, {
                    label: 'person-form',
                    value: 'person-form',
                }, {
                    label: 'person-table',
                    value: 'person-table',
                }, {
                    label: 'project-form',
                    value: 'project-form',
                }, {
                    label: 'project-table',
                    value: 'project-table',
                }, {
                    label: 'prospect-form',
                    value: 'prospect-form',
                }, {
                    label: 'prospect-table',
                    value: 'prospect-table',
                },]
            }
        }],
        actions: [{
            button: {
                type: FormButtonTypeEnum.Submit,
                label: 'Criar',
            }
        }]
    }
}