import {
    ObjectToCode,
    FrontendFrameworkEnum,
    RequestTypeEnum,
    ActionVerbEnum,
    FormInputTypeEnum,
    FormButtonTypeEnum
} from '../interfaces/frontend';
export const ACL_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "acl-form",
    title: "Permissões",
    form: {
        id: "acl-form",
        title: 'Permissão',
        label: 'Permission',
        subtitle: 'Tratamento de dados de permissão',
        elements: [{
            input: {
                type: FormInputTypeEnum.Text,
                label: "Grupo",
                isRequired: true,
                name: "group",
                placeholder: "Identificador de grupo de permissões",
                // regex: /^\d+$/
            }
        }, {
            select: {
                label: "Módulo",
                name: "module",
                isRequired: true,
                optionsObject: [{
                    value: "user-list",
                    label: "Usuários"
                }, {
                    value: "client-list",
                    label: "Clientes"
                }, {
                    value: "financial-list",
                    label: "Financeiros"
                }, {
                    value: "acl-list",
                    label: "ACLs"
                }]
            }
        }, {
            select: {
                label: "Permissão",
                isRequired: true,
                name: "permission",
                isMultiple: true,
                optionsObject: [{
                    value: "create",
                    label: "Criar"
                }, {
                    value: "read",
                    label: "Ler"
                }, {
                    value: "update",
                    label: "Atualizar"
                }, {
                    value: "delete",
                    label: "Remover"
                }],
            }
        }],
        actions: [{
                button: {
                    type: FormButtonTypeEnum.Submit,
                    label: "CRIAR",
                    icon: "add"
                }
            }]
    }
};