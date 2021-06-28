import {
    ObjectToCode,
    FrontendFrameworkEnum,
    ButtonTypeEnum,
    InputTypeEnum,
    RequestTypeEnum,
    ActionVerbEnum
} from '../interfaces/frontend';
export const REMOVE_CONFIRMATION_DIALOG: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "remove-confirmation-dialog",
    title: "Confirmar remoção",
    form: [{
        id: "remove-confirmation-dialog",
        title: "Confirmar ação de remoção",
        subtitle: "Os ítens apagados não poderão ser recuperados diretamente pelo sistema",
        dialog: {
            id: 'remove-conrfirmation-dialog',
            template: 'RemoveConfirmationDialog'
        },
        actions: {
            id: "remove-confirmation-dialog-action",
            elements: [{
                button: {
                    id: "remove",
                    type: ButtonTypeEnum.Delete,
                    label: "REMOVER",
                    icon: "delete",
                    action: {
                        type: RequestTypeEnum.Api,
                        verb: ActionVerbEnum.Post,
                        url: "$ENV$/acl"
                    }
                }
            }]
        }
    }]
};