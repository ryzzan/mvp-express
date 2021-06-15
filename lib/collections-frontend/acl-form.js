"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACL_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ACL_FORM = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "acl-list",
    form: [{
            id: "acl",
            elements: [{
                    input: {
                        id: "group",
                        type: frontend_1.InputType.Text,
                        label: "Grupo",
                        required: true,
                        name: "group",
                        placeholder: "Identificador de grupo de permissões",
                        // regex: /^\d+$/
                    }
                }, {
                    select: {
                        id: "module",
                        label: "Módulo",
                        required: true,
                        name: "module",
                        placeholder: "Fluxo de uso",
                        options: {
                            type: frontend_1.OptionType.Object,
                            object: [{
                                    value: "user-list",
                                    valueView: "Usuários"
                                }, {
                                    value: "client-list",
                                    valueView: "Clientes"
                                }, {
                                    value: "financial-list",
                                    valueView: "Financeiros"
                                }, {
                                    value: "acl-list",
                                    valueView: "ACLs"
                                }]
                        }
                    }
                }, {
                    select: {
                        id: "permission",
                        label: "Permissão",
                        required: true,
                        name: "permission",
                        options: {
                            type: frontend_1.OptionType.Object,
                            object: [{
                                    value: "create",
                                    valueView: "Criar"
                                }, {
                                    value: "read",
                                    valueView: "Ler"
                                }, {
                                    value: "update",
                                    valueView: "Atualizar"
                                }, {
                                    value: "delete",
                                    valueView: "Remover"
                                }]
                        },
                        placeholder: "Verbo de ação"
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
                            url: "$ENV$/auth/acl"
                        }
                    }
                }]
        }]
};
