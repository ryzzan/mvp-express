"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAC_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.SAC_FORM = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "sac-list",
    form: [{
            id: "sac",
            elements: [{
                    input: {
                        id: "id",
                        type: frontend_1.InputType.Text,
                        label: "Identificador",
                        required: true,
                        name: "id",
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
                        id: "complement",
                        type: frontend_1.InputType.Text,
                        label: "Complemento",
                        required: true,
                        name: "complement",
                        placeholder: "Informação adicional do contato"
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
                            url: "$ENV$/sac"
                        }
                    }
                }]
        }]
};
