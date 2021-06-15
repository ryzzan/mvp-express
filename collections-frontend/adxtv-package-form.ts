import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const ADXTV_PACKAGE_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "adxtv-package-list",
    form: [{
        id: "adxtv",
        elements: [{
            input: {
                id: "name",
                type: InputType.Text,
                label: "Nome",
                required: true,
                name: "name",
                placeholder: "Nome promocional do pacote",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "price",
                type: InputType.Text,
                label: "Valor",
                required: true,
                name: "price",
                placeholder: "Preço do pacote"
            }
        }, {
            select: {
                id: "youcastPackage",
                label: "Pacotes",
                required: true,
                name: "youcastPackage",
                placeholder: "Pacotes da YouCast",
                options: {
                    type: OptionType.Object,
                    object: [{
                        value: 'vip',
                        valueView: 'VIP'
                    }, {
                        value: 'hbo',
                        valueView: 'HBO'
                    }, {
                        value: 'minimum',
                        valueView: 'Minimum'
                    }, {
                        value: 'xxx',
                        valueView: 'XXX'
                    }, {
                        value: 'sports',
                        valueView: 'Sports'
                    }]
                }
            }
        }, {
            input: {
                id: "description",
                type: InputType.Text,
                label: "Descrição",
                required: true,
                name: "description",
                placeholder: "Descrição comercial do pacote"
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
                    url: "$ENV$/auth/adxtv"
                }
            }
        }]
    }]
};