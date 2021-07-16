"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_TABLE = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.MODULE_TABLE = {
    module: "module-table",
    title: "Módulos",
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    table: {
        id: "module-table",
        title: "Módulos",
        data: {
            type: frontend_1.RequestTypeEnum.Object,
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
                                type: frontend_1.RequestTypeEnum.Api,
                                url: '/main/module/123'
                            },
                            label: 'Editar'
                        }, {
                            action: {
                                type: frontend_1.RequestTypeEnum.Dialog,
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
};
