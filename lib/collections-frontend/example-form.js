"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXAMPLE_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.EXAMPLE_FORM = {
    module: 'example-form',
    title: 'Pessoas',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    form: {
        label: 'Pessoa',
        id: 'example-form',
        elements: [{
                tabs: [{
                        elements: [{
                                input: {
                                    label: 'CPF',
                                    name: 'uniqueId',
                                    placeholder: 'Apenas números',
                                    type: frontend_1.FormInputTypeEnum.Text,
                                    isRequired: true,
                                }
                            }, {
                                input: {
                                    label: 'Nome',
                                    name: 'name',
                                    placeholder: 'Nome completo',
                                    type: frontend_1.FormInputTypeEnum.Text,
                                    isRequired: true,
                                }
                            }, {
                                input: {
                                    label: 'Nascimento',
                                    name: 'birthdate',
                                    placeholder: 'dd/mm/aaaa',
                                    type: frontend_1.FormInputTypeEnum.Date,
                                    isRequired: true,
                                }
                            }, {
                                select: {
                                    label: 'Gênero',
                                    name: 'gender',
                                    optionsObject: [{
                                            label: 'Masculino',
                                            value: 'male'
                                        }, {
                                            label: 'Feminino',
                                            value: 'female'
                                        }],
                                    isRequired: true,
                                }
                            }],
                        id: 'example-main',
                        label: 'Dados principais'
                    }, {
                        elements: [{
                                array: {
                                    elements: [{
                                            select: {
                                                label: 'Tipo de contato',
                                                name: 'contactType',
                                                optionsObject: [{
                                                        label: 'Celular',
                                                        value: 'mobile'
                                                    }, {
                                                        label: 'E-mail',
                                                        value: 'email'
                                                    }, {
                                                        label: 'Facebook',
                                                        value: 'facebook'
                                                    }, {
                                                        label: 'Linkedin',
                                                        value: 'linkedin'
                                                    }]
                                            }
                                        }, {
                                            input: {
                                                label: 'Valor',
                                                name: 'value',
                                                placeholder: 'Valor do contato',
                                                type: frontend_1.FormInputTypeEnum.Text,
                                            }
                                        }, {
                                            input: {
                                                label: 'Complemento',
                                                name: 'complement',
                                                placeholder: 'Mais informações sobre o contato',
                                                type: frontend_1.FormInputTypeEnum.Text,
                                            }
                                        }],
                                    label: 'Contato',
                                    id: 'example-contact-array'
                                }
                            }],
                        id: 'example-contact',
                        label: 'Contatos'
                    }]
            }],
        actions: [{
                button: {
                    label: 'Criar',
                    type: frontend_1.FormButtonTypeEnum.Submit,
                    icon: 'save'
                }
            }]
    }
};
