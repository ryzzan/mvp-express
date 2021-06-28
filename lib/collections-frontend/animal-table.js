"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANIMAL_TABLE = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ANIMAL_TABLE = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: 'animal-table',
    title: 'Animais',
    table: [{
            id: 'animal-table',
            title: 'Minha tabela de animais',
            subtitle: 'Dados dos meus animais de estimação',
            data: {
                type: frontend_1.RequestTypeEnum.Object
            },
            object: [{
                    name: 'Cake',
                    species: 'Canina',
                    phone: '(82) 98205-1109'
                }, {
                    name: 'Tetê',
                    species: 'Canina',
                    phone: '(82) 99924-2682'
                }, {
                    name: 'Dona Gata',
                    species: 'Felina',
                    phone: '(82) 99924-2682'
                }],
            elements: [{
                    column: {
                        label: 'Nome'
                    },
                    row: {
                        type: 'string',
                        field: 'name'
                    }
                }, {
                    column: {
                        label: 'Espécie'
                    },
                    row: {
                        type: 'string',
                        field: 'species'
                    }
                }, {
                    column: {
                        label: 'Contato'
                    },
                    row: {
                        type: 'string',
                        field: 'phone'
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
                                    type: frontend_1.RequestTypeEnum.Link,
                                    url: "/main/test/123"
                                }
                            }, {
                                label: "Remover",
                                action: {
                                    type: frontend_1.RequestTypeEnum.Dialog,
                                    verb: frontend_1.ActionVerbEnum.Delete,
                                    url: "$ENV$/people/{id}",
                                },
                                dialog: {
                                    template: "RemoveConfirmationDialogComponent",
                                    id: "remove-confirmation-dialog"
                                },
                                validator: "$VALIDATOR_CONFIRM_ACTION$"
                            }, {
                                label: "Bloquear",
                                action: {
                                    type: frontend_1.RequestTypeEnum.Api,
                                    verb: frontend_1.ActionVerbEnum.Put,
                                    url: "$ENV$/people/{id}",
                                    body: {
                                        isBlocked: true
                                    }
                                },
                                validator: "$VALIDATOR_CONFIRM_ACTION$"
                            }, {
                                label: "Desbloquear",
                                action: {
                                    type: frontend_1.RequestTypeEnum.Api,
                                    verb: frontend_1.ActionVerbEnum.Put,
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
