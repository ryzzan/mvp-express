"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.COMPANY_LIST = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "company-list",
    table: [{
            id: "company-list",
            action: {
                type: frontend_1.ActionType.Api,
                verb: frontend_1.ActionVerb.Get,
                url: "$ENV$/companies"
            },
            elements: [{
                    column: {
                        label: "Nome fantasia",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "businessName"
                    }
                }, {
                    column: {
                        label: "CNPJ"
                    },
                    row: {
                        type: "string",
                        field: "uniqueId"
                    }
                }, {
                    column: {
                        label: "Data de abertura",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "openingDate"
                    }
                }, {
                    // TO-DO where filter on code maker
                    column: {
                        label: "Telefone"
                    },
                    row: {
                        type: "array",
                        field: "contacts",
                        filter: {
                            type: "object",
                            where: [{
                                    attribute: "type",
                                    operator: "equal",
                                    value: "mobile"
                                }]
                        }
                    }
                }, {
                    column: {
                        label: "E-mail"
                    },
                    row: {
                        type: "array",
                        field: "contacts",
                        filter: {
                            type: "object",
                            where: [{
                                    attribute: "type",
                                    operator: "equal",
                                    value: "email"
                                }]
                        }
                    }
                }, {
                    column: {
                        label: "Ações"
                    },
                    row: {
                        type: "menu",
                        icon: {
                            ui: "material",
                            name: "more_vert"
                        },
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
                            }, {
                                label: "Bloquear",
                                action: {
                                    type: "api",
                                    verb: "put",
                                    url: "$ENV$/people/{id}",
                                    body: {
                                        isBlocked: true
                                    }
                                },
                                validator: "$VALIDATOR_CONFIRM_ACTION$"
                            }, {
                                label: "Desbloquear",
                                action: {
                                    type: "api",
                                    verb: "put",
                                    url: "$ENV$/people/{id}",
                                    body: {
                                        isBlocked: false
                                    }
                                },
                                validator: "$VALIDATOR_CONFIRM_ACTION$"
                            }]
                    }
                }]
        }]
};
