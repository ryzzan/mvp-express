"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_FORM = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.MODULE_FORM = {
    module: 'module-form',
    title: 'Módulo',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    form: {
        id: 'module-form',
        label: 'Módulo',
        title: 'Módulo',
        elements: [{
                input: {
                    type: frontend_1.FormInputTypeEnum.Text,
                    label: 'Nome do arquivo',
                    name: 'moduleId',
                    placeholder: 'Ex.: component, person, company',
                    isRequired: true
                }
            }, {
                array: {
                    id: "module-form-array",
                    label: "Componente",
                    elements: [{
                            select: {
                                label: 'Componentes relacionados',
                                name: 'components',
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
                        }]
                }
            }],
        actions: [{
                button: {
                    type: frontend_1.FormButtonTypeEnum.Submit,
                    label: 'Criar',
                }
            }]
    }
};
