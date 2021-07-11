"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPONENT_FORM = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.COMPONENT_FORM = {
    module: "component-form",
    title: "Componente",
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    form: {
        id: "component-form",
        label: "Componentes",
        title: "Componente",
        elements: [{
                input: {
                    type: frontend_1.FormInputTypeEnum.Text,
                    name: "componentId",
                    isRequired: true,
                    label: "Nome do arquivo",
                    placeholder: "Ex.: component-form, component-table",
                    width: 380,
                }
            }, {
                select: {
                    label: "Tipo de componente",
                    name: "componentType",
                    isRequired: true,
                    optionsObject: [{
                            label: "Formulário",
                            value: "form",
                        }, {
                            label: "Tabela",
                            value: "table",
                        },]
                }
            }, {
                array: {
                    id: "form-elements",
                    label: "Elementos do formulário",
                    title: "Elementos do formulário",
                    elements: [{
                            select: {
                                label: "Tipo de elemento",
                                name: "formElement",
                                optionsObject: [{
                                        label: "input",
                                        value: "input"
                                    }, {
                                        label: "select",
                                        value: "select"
                                    }, {
                                        label: "button",
                                        value: "button"
                                    }, {
                                        label: "checkbox",
                                        value: "checkbox"
                                    }, {
                                        label: "radio",
                                        value: "radio"
                                    }, {
                                        label: "autocomplete",
                                        value: "autocomplete"
                                    }, {
                                        label: "range",
                                        value: "range"
                                    }, {
                                        label: "array",
                                        value: "array"
                                    },]
                            }
                        }, {
                            input: {
                                label: "Nome do elemento",
                                name: "name",
                                placeholder: "Ex.: name, productName",
                                type: frontend_1.FormInputTypeEnum.Text
                            }
                        }, {
                            input: {
                                label: "Label do elemento",
                                name: "label",
                                placeholder: "Ex.: Nome, Nome do produto",
                                type: frontend_1.FormInputTypeEnum.Text,
                                width: 380
                            }
                        }, {
                            input: {
                                label: "Placeholder do elemento",
                                name: "placeholder",
                                placeholder: "Ex.: Nome completo, Nome completo do produto",
                                type: frontend_1.FormInputTypeEnum.Text,
                                width: 380
                            }
                        }, {
                            select: {
                                label: "Tipagem do elemento",
                                name: "type",
                                condition: "formElement === 'input'",
                                optionsObject: [{
                                        label: "Texto",
                                        value: frontend_1.FormInputTypeEnum.Text
                                    }, {
                                        label: "Data",
                                        value: frontend_1.FormInputTypeEnum.Date
                                    }, {
                                        label: "Número",
                                        value: frontend_1.FormInputTypeEnum.Number
                                    }, {
                                        label: "E-mail",
                                        value: frontend_1.FormInputTypeEnum.Email
                                    }, {
                                        label: "Senha",
                                        value: frontend_1.FormInputTypeEnum.Password
                                    }, {
                                        label: "Arquivo",
                                        value: frontend_1.FormInputTypeEnum.File
                                    }, {
                                        label: "Escondido",
                                        value: frontend_1.FormInputTypeEnum.Hidden
                                    }, {
                                        label: "Telefone",
                                        value: frontend_1.FormInputTypeEnum.Tel
                                    }, {
                                        label: "Data, hora e local",
                                        value: frontend_1.FormInputTypeEnum.DatetimeLocal
                                    }, {
                                        label: "Cor",
                                        value: frontend_1.FormInputTypeEnum.Color
                                    }, {
                                        label: "Mês",
                                        value: frontend_1.FormInputTypeEnum.Month
                                    }, {
                                        label: "Tempo",
                                        value: frontend_1.FormInputTypeEnum.Time
                                    }, {
                                        label: "URL",
                                        value: frontend_1.FormInputTypeEnum.Url
                                    }, {
                                        label: "Semana",
                                        value: frontend_1.FormInputTypeEnum.Week
                                    }]
                            }
                        }, {
                            input: {
                                label: "Largura",
                                name: "width",
                                placeholder: "Ex.: 380",
                                type: frontend_1.FormInputTypeEnum.Text,
                            }
                        }]
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
