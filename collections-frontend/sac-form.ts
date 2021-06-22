import {ObjectToCode, FrontendFrameworkEnum, ButtonTypeEnum, InputTypeEnum, RequestTypeEnum, ActionTypeEnum, ActionVerbEnum} from '../interfaces/frontend';
export const SAC_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "sac-form",
    title: "SAC",
    form: [{
        id: "sac-form",
        elements: [{
            input: {
                id: "id",
                type: InputTypeEnum.Text,
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
                    type: RequestTypeEnum.Object,
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
                type: InputTypeEnum.Text,
                label: "Valor",
                required: true,
                name: "value",
                placeholder: "Valor correspondente ao contato"
            }
        }, {
            input: {
                id: "complement",
                type: InputTypeEnum.Text,
                label: "Complemento",
                required: true,
                name: "complement",
                placeholder: "Informação adicional do contato"
            }
        },],
        actions: {
            id: "sac-form-action",
            elements: [{
                button: {
                    id: "create",
                    type: ButtonTypeEnum.Submit,
                    label: "CRIAR",
                    icon:  "add",
                    action: {
                        type: ActionTypeEnum.Api,
                        verb: ActionVerbEnum.Post,
                        url: "$ENV$/sac"
                    }
                }
            }]
        }
    }]
};