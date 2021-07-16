"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_TABLE = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.PROJECT_TABLE = {
    module: "project-table",
    title: "Projetos",
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    table: {
        id: "project-table",
        title: "Projetos",
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
                    label: "Localização",
                },
                row: {
                    type: "string",
                    field: "path"
                }
            }, {
                column: {
                    label: "Módulos relacionados",
                },
                row: {
                    type: "string",
                    field: "modules"
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
                                url: '/main/project/123'
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
                modules: 'company, person, prospect',
                name: 'Kliento',
                path: '~/Projects/kliento'
            }, {
                modules: 'component, module, project',
                name: 'MVP Express',
                path: '~/Projects/mvp-express'
            }]
    }
};
