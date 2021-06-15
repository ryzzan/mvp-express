"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACL_LIST = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ACL_LIST = {
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
                        label: "Grupo",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "group"
                    }
                }, {
                    column: {
                        label: "Módulo",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "module"
                    }
                }, {
                    column: {
                        label: "Permissão",
                        sort: true
                    },
                    row: {
                        type: "string",
                        field: "permission"
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
