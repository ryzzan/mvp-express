"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.USER_LIST = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "user-list",
    table: [{
            id: "user-list",
            action: {
                type: frontend_1.ActionType.Api,
                verb: frontend_1.ActionVerb.Get,
                url: "$ENV$/users"
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
                        label: "Código único"
                    },
                    row: {
                        type: "string",
                        field: "uniqueId"
                    }
                }, {
                    column: {
                        label: "Gênero",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "gender"
                    }
                }, {
                    column: {
                        label: "Data de nascimento"
                    },
                    row: {
                        type: "string",
                        field: "birthday"
                    }
                }, {
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
