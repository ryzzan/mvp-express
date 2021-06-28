import {
    ObjectToCode,
    FrontendFrameworkEnum,
    ButtonTypeEnum,
    InputTypeEnum,
    RequestTypeEnum,
    ActionVerbEnum
} from '../interfaces/frontend';
export const LOGOUT_CONFIRMATION_DIALOG: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "logout-confirmation-dialog",
    title: "Deseja realmente sair?",
    form: [{
        id: "logout-confirmation-dialog",
        title: "Deseja realmente sair?",
        dialog: {
            id: 'remove-conrfirmation-dialog',
            template: 'LogoutConfirmationDialog'
        },
        actions: {
            id: "logout-confirmation-dialog-action",
            elements: [{
                button: {
                    id: "logout",
                    type: ButtonTypeEnum.Link,
                    label: "CONFIRMAR",
                    icon: "exit",
                    action: {
                        type: RequestTypeEnum.Link,
                        url: "/"
                    }
                }
            }, {
                button: {
                    id: "cancel",
                    type: ButtonTypeEnum.Link,
                    label: "CANCELAR",
                    icon: "cancel",
                    action: {
                        type: RequestTypeEnum.Link,
                        url: "."
                    }
                }
            }]
        }
    }]
};