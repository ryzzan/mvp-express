import {
    ObjectToCode,
    FrontendFramework,
    ButtonType,
    InputType,
    OptionType,
    ActionType,
    ActionVerb
} from '../interfaces/frontend';
export const CHANGE_PASSWORD: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "change-password",
    form: [{
        id: "changePassword",
        elements: [{
            input: {
                id: "password",
                type: InputType.Password,
                label: "Senha",
                required: true,
                name: "password",
                placeholder: "Mínimo de 8 caracteres",
            }
        }, {
            input: {
                id: "repeatPassword",
                type: InputType.Password,
                label: "Repetir senha",
                required: true,
                name: "repeatPassword",
                placeholder: "Repita sua nova senha",
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "ALTERAR",
                icon: "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/acl"
                }
            }
        }]
    }]
};