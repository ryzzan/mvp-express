import { FormInputTypeEnum, FrontendFrameworkEnum, ObjectToCode, RequestTypeEnum } from "../interfaces/frontend";

export const PREFERENCE_TABLE: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: 'preference-table',
    title: 'Interesses',
    table: {
        id: 'preference-table',
        title: 'Interesses',
        actions: {
            id: 'preference-table-form',
            label: 'Interesse',
            elements: [{
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Pesquisar por nome',
                    type: FormInputTypeEnum.Text
                }
            }]
        },
        data: {
            type: RequestTypeEnum.Object,
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
                label: 'Total'
            },
            row: {
                type: 'number',
                field: 'total'
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
                        type: RequestTypeEnum.Link,
                        url: '/main/preference/123'
                    },
                    label: 'Editar'
                }, {
                    action: {
                        type: RequestTypeEnum.Dialog,
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
            total: 1000
        }, {
            name: 'Agropecuária',
            total: 1000,
        }, {
            name: 'Animais',
            total: 1000,
        }, {
            name: 'Arquitetura',
            total: 1000,
        }, {
            name: 'Arte',
            total: 1000,
        }, {
            name: 'Aviação',
            total: 1000,
        }, {
            name: 'Balada',
            total: 1000,
        }, {
            name: 'Caça e pesca',
            total: 1000,
        }, {
            name: 'Café',
            total: 1000,
        }, {
            name: 'Carros e motos',
            total: 1000,
        }, {
            name: 'Decoração',
            total: 1000,
        }, {
            name: 'Empreendedorismo',
            total: 1000,
        }, {
            name: 'Engenharia',
            total: 1000,
        }, {
            name: 'Espiritualidade',
            total: 1000,
        }]
    }
};