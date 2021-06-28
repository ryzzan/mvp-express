import {
    ObjectToCode,
    FrontendFrameworkEnum,
    ButtonTypeEnum,
    InputTypeEnum,
    RequestTypeEnum,
    ActionVerbEnum
} from '../interfaces/frontend';
export const CHANGE_PASSWORD_PROFILE_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "change-password-profile-form",
    title: "Mudar senha",
    form: [{
        id: "change-password-profile-form",
        title: "Alterar senha",
        elements: [{
            input: {
                id: "password",
                type: InputTypeEnum.Password,
                label: "Senha",
                required: true,
                name: "password",
                placeholder: "Mínimo de 8 caracteres",
            }
        }, {
            input: {
                id: "repeatPassword",
                type: InputTypeEnum.Password,
                label: "Repetir senha",
                required: true,
                name: "repeatPassword",
                placeholder: "Repita sua nova senha",
            }
        }],
        actions: {
            id: "change-password-profile-form-action",
            elements: [{
                button: {
                    id: "create",
                    type: ButtonTypeEnum.Submit,
                    label: "ALTERAR",
                    icon: "add",
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