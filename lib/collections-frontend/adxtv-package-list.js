"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADXTV_PACKAGE_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ADXTV_PACKAGE_LIST = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "adxtv-package-list",
    table: [{
            id: "adxtv-package-list",
            action: {
                type: frontend_1.ActionType.Api,
                verb: frontend_1.ActionVerb.Get,
                url: "$ENV$/adxtv"
            },
            elements: [{
                    column: {
                        label: "Nome",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "name"
                    }
                }, {
                    column: {
                        label: "Valor"
                    },
                    row: {
                        type: "number",
                        field: "price"
                    }
                }, {
                    column: {
                        label: "Descrição"
                    },
                    row: {
                        type: "string",
                        field: "description"
                    }
                }, {
                    column: {
                        label: "Ações"
                    },
                    row: {
                        type: "menu",
                        icon: "more_vert",
                        menu: [{
                                label: "Editar",
                                action: {
                                    type: "link",
                                    url: "$ENV$/companies/{id}"
                                }
                            }, {
                                label: "Remover",
                                action: {
                                    type: "api",
                                    verb: "delete",
                                    url: "$ENV$/people/{id}"
                                },
                                validator: "$VALIDATOR_CONFIRM_ACTION$"
                            }]
                    }
                }]
        }]
};
