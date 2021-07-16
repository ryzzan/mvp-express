"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_FORM = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.PROJECT_FORM = {
    module: 'project-form',
    title: 'Projeto',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    form: {
        id: 'project-form',
        label: 'Projeto',
        title: 'Projeto',
        elements: [{
                input: {
                    label: 'Nome do arquivo',
                    name: 'projectId',
                    placeholder: 'Ex.: my-project, project-backoffice',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                input: {
                    label: 'Nome do projeto',
                    name: 'projectName',
                    placeholder: 'Ex.: My Project, Project Backoffice',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                select: {
                    label: 'Módulos correspondentes',
                    name: 'modules',
                    isMultiple: true,
                    optionsObject: [{
                            label: 'company',
                            value: 'company'
                        }, {
                            label: 'component',
                            value: 'component'
                        }, {
                            label: 'module',
                            value: 'module'
                        }, {
                            label: 'person',
                            value: 'person'
                        }, {
                            label: 'project',
                            value: 'project'
                        }, {
                            label: 'prospect',
                            value: 'prospect'
                        },]
                }
            }],
        actions: [{
                button: {
                    type: frontend_1.FormButtonTypeEnum.Submit,
                    label: "Criar",
                }
            }]
    }
};
