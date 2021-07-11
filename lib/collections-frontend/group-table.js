"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GROUP_TABLE = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.GROUP_TABLE = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: 'group-table',
    title: 'Grupos',
    table: {
        id: 'group-table',
        title: 'Grupos',
        actions: {
            id: 'group-table-form',
            label: 'Grupos',
            elements: [{
                    input: {
                        label: 'Nome',
                        name: 'name',
                        placeholder: 'Pesquisar por nome',
                        type: frontend_1.FormInputTypeEnum.Text
                    }
                }]
        },
        data: {
            type: frontend_1.RequestTypeEnum.Object,
        },
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
                    label: 'Usuários'
                },
                row: {
                    type: 'number',
                    field: 'quantity'
                }
            }, {
                column: {
                    label: 'Ações'
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [{
                            action: {
                                type: frontend_1.RequestTypeEnum.Link,
                                url: '/main/group/123'
                            },
                            label: 'Editar'
                        }, {
                            action: {
                                type: frontend_1.RequestTypeEnum.Dialog,
                            },
                            label: 'Remover',
                            dialog: {
                                templateFolder: 'remove-confirmation-dialog',
                                id: 'remove-confirmation-dialog',
                            }
                        }],
                }
            }],
        object: [{
                name: 'Deu match Salvador',
                quantity: 17
            }, {
                name: 'Goiás é mais',
                quantity: 20,
            }, {
                name: 'Procurando novos amigos',
                quantity: 51,
            }, {
                name: 'Rock and roll',
                quantity: 9,
            }]
    }
};
