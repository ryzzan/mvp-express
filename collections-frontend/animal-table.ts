import { FrontendFrameworkEnum, ObjectToCode, RequestTypeEnum, ActionVerbEnum } from '../interfaces/frontend';
export const ANIMAL_TABLE: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: 'animal-table',
    title: 'Animais',
    table: [{
        id: 'animal-table',
        title: 'Minha tabela de animais',
        subtitle: 'Dados dos meus animais de estimação',
        data: {
            type: RequestTypeEnum.Object
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
                        type: RequestTypeEnum.Link,
                        url: "/main/test/123"
                    }
                }, {
                    label: "Remover",
                    action: {
                        type: RequestTypeEnum.Dialog,
                        verb: ActionVerbEnum.Delete,
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
                        type: RequestTypeEnum.Api,
                        verb: ActionVerbEnum.Put,
                        url: "$ENV$/people/{id}",
                        body: {
                            isBlocked: true
                        }
                    },
                    validator: "$VALIDATOR_CONFIRM_ACTION$"
                }, {
                    label: "Desbloquear",
                    action: {
                        type: RequestTypeEnum.Api,
                        verb: ActionVerbEnum.Put,
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
}