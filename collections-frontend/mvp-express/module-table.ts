import { FrontendFrameworkEnum, ObjectToCode, RequestTypeEnum } from "../../interfaces/frontend";

export const MODULE_TABLE: ObjectToCode = {
    module: "module-table",
    title: "Módulos",
    frontendFramework: FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    table: {
        id: "module-table",
        title: "Módulos",
        data: {
            type: RequestTypeEnum.Object,            
        },
        elements: [{
            column: {
                label: "Nome",
            }, 
            row: {
                type: "string",
                field: "name"
            }
        }, {
            column: {
                label: "Componentes relacionados",
            }, 
            row: {
                type: "string",
                field: "components"
            }
        }, {
            column: {
                label: 'Ações'
            },
            row: {
                type: 'menu',
                icon: 'more_vert',
                menu: [{
                    action: {
                        type: RequestTypeEnum.Api,
                        url: '/main/module/123'
                    },
                    label: 'Editar'
                }, {
                    action: {
                        type: RequestTypeEnum.Dialog,
                    },
                    label: 'Remover',
                    dialog: {
                        templateFolder: 'remove-confirmation-dialog',
                        id: 'remove-confirmation-dialog',
                    }
                }],
            }
        }],
        object: [{
            components: 'company-form, company-table',
            name: 'company',
        }, {
            components: 'person-form, person-table',
            name: 'person',
        }, {
            components: 'prospect-form, prospect-table',
            name: 'prospect',
        }, {
            components: 'compornent-form, component-table',
            name: 'component',
        }, {
            components: 'module-form, module-table',
            name: 'module',
        }, {
            components: 'project-form, project-table',
            name: 'project',
        }]
    }
}