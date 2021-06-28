import {
    RequestTypeEnum,
    ActionVerbEnum,
    FrontendFrameworkEnum,
    InputTypeEnum,
    ObjectToCode
} from '../interfaces/frontend';

export const ACL_TABLE: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "acl-table",
    title: "Permissões",
    table: [{
        id: "acl-table",
        title: "Permissão",
        subtitle: "Gerenciamento dos dados de permissão",
        actions: {
            id: "acl-table-form",
            elements: [{
                input: {
                    id: "acl-filter-search",
                    label: "Pesquisar",
                    name: "aclFilterSearch",
                    type: InputTypeEnum.Text,
                    placeholder: "Que permissão você procura?"
                }
            }]
        },
        object: [{
            group: 'Master',
            module: 'Todos',
            permission: 'Todas'
        }, {
            group: 'Revendedor',
            module: 'Pacotes',
            permission: 'Ler'
        }, {
            group: 'Revendedor',
            module: 'Cliente PF',
            permission: 'Ler'
        }, {
            group: 'Revendedor',
            module: 'Cliente PF',
            permission: 'Criar'
        }, {
            group: 'Revendedor',
            module: 'Cliente PF',
            permission: 'Editar'
        }, {
            group: 'Revendedor',
            module: 'Cliente PJ',
            permission: 'Ler'
        }, {
            group: 'Revendedor',
            module: 'Cliente PJ',
            permission: 'Criar'
        }, {
            group: 'Revendedor',
            module: 'Cliente PJ',
            permission: 'Editar'
        }, {
            group: 'Revendedor',
            module: 'Financeiro',
            permission: 'Ler'
        }, {
            group: 'Assistente',
            module: 'Usuários',
            permission: 'Ler'
        }, {
            group: 'Assistente',
            module: 'Usuários',
            permission: 'Criar'
        }, {
            group: 'Assistente',
            module: 'Usuários',
            permission: 'Editar'
        }, {
            group: 'Assistente',
            module: 'Pacotes',
            permission: 'Todas'
        }],
        data: {
            type: RequestTypeEnum.Object,
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
                        type: RequestTypeEnum.Link,
                        url: "/main/permission/123"
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
                }]
            }
        }]
    }],
};