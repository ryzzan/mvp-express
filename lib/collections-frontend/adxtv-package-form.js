"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADXTV_PACKAGE_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ADXTV_PACKAGE_FORM = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "adxtv-package-list",
    form: [{
            id: "adxtv",
            elements: [{
                    input: {
                        id: "name",
                        type: frontend_1.InputType.Text,
                        label: "Nome",
                        required: true,
                        name: "name",
                        placeholder: "Nome promocional do pacote",
                        // regex: /^\d+$/
                    }
                }, {
                    input: {
                        id: "price",
                        type: frontend_1.InputType.Text,
                        label: "Valor",
                        required: true,
                        name: "price",
                        placeholder: "Preço do pacote"
                    }
                }, {
                    select: {
                        id: "youcastPackage",
                        label: "Valor",
                        required: true,
                        name: "youcastPackage",
                        placeholder: "Pacotes da YouCast",
                        options: {
                            type: frontend_1.OptionType.Object,
                            object: [{
                                    value: 'vip',
                                    valueView: 'VIP'
                                }, {
                                    value: 'hbo',
                                    valueView: 'HBO'
                                }, {
                                    value: 'minimum',
                                    valueView: 'Minimum'
                                }, {
                                    value: 'xxx',
                                    valueView: 'XXX'
                                }, {
                                    value: 'sports',
                                    valueView: 'Sports'
                                }]
                        }
                    }
                }, {
                    input: {
                        id: "description",
                        type: frontend_1.InputType.Text,
                        label: "Descrição",
                        required: true,
                        name: "description",
                        placeholder: "Descrição comercial do pacote"
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
                            url: "$ENV$/auth/adxtv"
                        }
                    }
                }]
        }]
};
