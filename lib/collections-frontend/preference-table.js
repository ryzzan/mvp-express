"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFERENCE_TABLE = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.PREFERENCE_TABLE = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: 'preference-table',
    title: 'Preferências',
    table: {
        id: 'preference-table',
        title: 'Preferências',
        actions: {
            id: 'preference-table-form',
            label: 'Preferência',
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
                    label: 'Ações'
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [{
                            action: {
                                type: frontend_1.RequestTypeEnum.Link,
                                url: '/main/preference/123'
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
                name: 'Administração e gestão',
            }, {
                name: 'Agropecuária',
            }, {
                name: 'Animais',
            }, {
                name: 'Arquitetura',
            }, {
                name: 'Arte',
            }, {
                name: 'Aviação',
            }, {
                name: 'Balada',
            }, {
                name: 'Caça e pesca',
            }, {
                name: 'Café',
            }, {
                name: 'Carros e motos',
            }, {
                name: 'Decoração',
            }, {
                name: 'Empreendedorismo',
            }, {
                name: 'Engenharia',
            }, {
                name: 'Espiritualidade',
            }]
    }
};
