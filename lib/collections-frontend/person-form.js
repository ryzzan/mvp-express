"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERSON_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.PERSON_FORM = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "person-form",
    title: "Pessoa",
    form: [{
            id: "person",
            elements: [{
                    input: {
                        id: "uniqueId",
                        type: frontend_1.InputType.Text,
                        label: "CPF",
                        required: true,
                        name: "uniqueId",
                        placeholder: "Apenas números",
                        // regex: /^\d+$/
                    }
                }, {
                    input: {
                        id: "name",
                        type: frontend_1.InputType.Text,
                        label: "Nome",
                        required: true,
                        name: "name",
                        placeholder: "Nome completo"
                    }
                }, {
                    input: {
                        id: "birthday",
                        type: frontend_1.InputType.Date,
                        label: "Nascimento",
                        required: true,
                        name: "birthday",
                        placeholder: "Nome completo"
                    }
                }, {
                    select: {
                        id: "gender",
                        label: "Gênero",
                        required: true,
                        name: "gender",
                        options: {
                            type: frontend_1.OptionType.Object,
                            object: [{
                                    value: 'f',
                                    valueView: 'Feminino'
                                }, {
                                    value: 'm',
                                    valueView: 'Masculino'
                                }]
                        },
                        placeholder: "Gênero para tratamento"
                    }
                }, {
                    array: {
                        id: "contacts",
                        label: "Contato",
                        elements: [{
                                input: {
                                    id: "contactId",
                                    type: frontend_1.InputType.Text,
                                    label: "Identificador",
                                    required: true,
                                    name: "contactId",
                                    placeholder: "Nome identificando o contato"
                                }
                            }, {
                                select: {
                                    id: "contactType",
                                    label: "Tipo de contato",
                                    required: true,
                                    name: "contactType",
                                    placeholder: "Tipo de contato",
                                    options: {
                                        type: frontend_1.OptionType.Object,
                                        object: [{
                                                value: "mobile",
                                                valueView: "Celular"
                                            }, {
                                                value: "email",
                                                valueView: "E-mail"
                                            }, {
                                                value: "phone",
                                                valueView: "Telefone convencional"
                                            }, {
                                                value: "socialMedia",
                                                valueView: "Rede social"
                                            }]
                                    }
                                }
                            }, {
                                input: {
                                    id: "value",
                                    type: frontend_1.InputType.Text,
                                    label: "Valor",
                                    required: true,
                                    name: "value",
                                    placeholder: "Valor correspondente ao contato"
                                }
                            }, {
                                input: {
                                    id: "contactComplement",
                                    type: frontend_1.InputType.Text,
                                    label: "Complemento",
                                    required: true,
                                    name: "contactComplement",
                                    placeholder: "Informação adicional do contato"
                                }
                            }]
                    }
                }, {
                    array: {
                        id: "addresses",
                        label: "Endereço",
                        elements: [{
                                input: {
                                    id: "postalCode",
                                    type: frontend_1.InputType.Text,
                                    label: "CEP",
                                    required: true,
                                    name: "postalCode",
                                    placeholder: "Código postal do seu endereço"
                                }
                            }, {
                                input: {
                                    id: "addressId",
                                    type: frontend_1.InputType.Text,
                                    label: "Identificador",
                                    required: true,
                                    name: "addressId",
                                    placeholder: "Um apelido para este endereço"
                                }
                            }, {
                                input: {
                                    id: "address",
                                    type: frontend_1.InputType.Text,
                                    label: "Logradouro",
                                    required: true,
                                    name: "address",
                                    placeholder: "Nome da Rua, Avenida, Travessa, etc."
                                }
                            }, {
                                input: {
                                    id: "number",
                                    type: frontend_1.InputType.Text,
                                    label: "Número",
                                    required: true,
                                    name: "number",
                                    placeholder: "Código postal do seu endereço"
                                }
                            }, {
                                input: {
                                    id: "district",
                                    type: frontend_1.InputType.Text,
                                    label: "Bairro",
                                    required: true,
                                    name: "district",
                                    placeholder: "Código postal do seu endereço"
                                }
                            }, {
                                input: {
                                    id: "addressComplement",
                                    type: frontend_1.InputType.Text,
                                    label: "Complemento",
                                    name: "addressComplement",
                                    placeholder: "Mais informações que ajudem a achar o seu endereço"
                                }
                            }, {
                                input: {
                                    id: "country",
                                    type: frontend_1.InputType.Text,
                                    label: "País",
                                    name: "country",
                                    placeholder: "País em que fica seu endereço"
                                }
                            }, {
                                input: {
                                    id: "state",
                                    type: frontend_1.InputType.Text,
                                    label: "Estado",
                                    name: "state",
                                    placeholder: "Estado em que fica seu endereço"
                                }
                            }, {
                                input: {
                                    id: "city",
                                    type: frontend_1.InputType.Text,
                                    label: "Cidade",
                                    name: "city",
                                    placeholder: "Município em que fica seu endereço"
                                }
                            }]
                    }
                }, {
                    button: {
                        id: "create",
                        type: frontend_1.ButtonType.Submit,
                        label: "CRIAR",
                        icon: "add",
                        action: {
                            type: frontend_1.ActionType.Api,
                            verb: frontend_1.ActionVerb.Post,
                            url: "$ENV$/auth/login"
                        }
                    }
                }]
        }]
};
