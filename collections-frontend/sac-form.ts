import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const SAC_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "sac-list",
    form: [{
        id: "sac",
        elements: [{
            input: {
                id: "id",
                type: InputType.Text,
                label: "Identificador",
                required: true,
                name: "id",
                placeholder: "Nome identificando o contato"
            }
        }, {
            select: {
                id: "contactType",
                label: "Tipo de contato",
                required: true,
                name: "contactType",
                placeholder: "Tipo de contato",
                options: {
                    type: OptionType.Object,
                    object: [{
                        value: "mobile",
                        valueView: "Celular"
                    }, {
                        value: "email",
                        valueView: "E-mail"
                    }, {
                        value: "phone",
                        valueView: "Telefone convencional"
                    }, {
                        value: "socialMedia",
                        valueView: "Rede social"
                    }]
                }
            }
        }, {
            input: {
                id: "value",
                type: InputType.Text,
                label: "Valor",
                required: true,
                name: "value",
                placeholder: "Valor correspondente ao contato"
            }
        }, {
            input: {
                id: "complement",
                type: InputType.Text,
                label: "Complemento",
                required: true,
                name: "complement",
                placeholder: "Informação adicional do contato"
            }
        }, {
            button: {
                id: "create",
                type: ButtonType.Submit,
                label: "CRIAR",
                icon:  "add",
                action: {
                    type: ActionType.Api,
                    verb: ActionVerb.Post,
                    url: "$ENV$/sac"
                }
            }
        }]
    }]
};