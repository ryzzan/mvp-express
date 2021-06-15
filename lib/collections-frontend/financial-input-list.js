"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FINANCIAL_INPUT_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.FINANCIAL_INPUT_LIST = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "acl-list",
    table: [{
            id: "acl-list",
            action: {
                type: frontend_1.ActionType.Api,
                verb: frontend_1.ActionVerb.Get,
                url: "$ENV$/acls"
            },
            elements: [{
                    column: {
                        label: "Fonte",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "source"
                    }
                }, {
                    column: {
                        label: "Descrição",
                    },
                    row: {
                        type: "string",
                        field: "description"
                    }
                }, {
                    column: {
                        label: "Valor",
                    },
                    row: {
                        type: "number",
                        field: "price"
                    }
                }, {
                    column: {
                        label: "Data do recebimento",
                        sort: true,
                    },
                    row: {
                        type: "number",
                        field: "date"
                    }
                }, {
                    column: {
                        label: "Status",
                        sort: true,
                    },
                    row: {
                        type: "text",
                        field: "status"
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
