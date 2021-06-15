import {ObjectToCode, FrontendFramework, ButtonType, InputType, OptionType, ActionType, ActionVerb} from '../interfaces/frontend';
export const COMPANY_FORM: ObjectToCode = {
    frontendFramework: FrontendFramework.Angular,
    module: "company-form",
    form: [{
        id: "company",
        elements: [{
            input: {
                // TO-DO API over uniqueId
                id: "uniqueId",
                type: InputType.Text,
                label: "CNPJ",
                required: true,
                name: "uniqueId",
                placeholder: "Apenas números",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "businessName",
                type: InputType.Text,
                label: "Nome fantasia",
                required: true,
                name: "businessName",
                placeholder: "Nome comercial"
            }
        }, {
            input: {
                id: "companyName",
                type: InputType.Text,
                label: "Razão social",
                required: true,
                name: "companyName",
                placeholder: "Nome jurídico"
            }
        }, {
            input: {
                id: "openingDate",
                type: InputType.Date,
                label: "Data de abertura",
                required: true,
                name: "openingDate",
                placeholder: "Data da constituição jurídica"
            }
        }, {
            input: {
                // TO-DO Autocomplete ADDING multiple activities
                id: "companyActivity",
                type: InputType.Text,
                label: "CNAE",
                required: true,
                name: "companyActivity",
                placeholder: "Classificação de atividade"
            }
        }, {
            input: {
                id: "contactId",
                type: InputType.Text,
                label: "Identificador",
                required: true,
                name: "contactId",
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
                id: "contactComplement",
                type: InputType.Text,
                label: "Complemento",
                required: true,
                name: "contactComplement",
                placeholder: "Informação adicional do contato"
            }
        }, {
            input: {
                id: "postalCode",
                type: InputType.Text,
                label: "CEP",
                required: true,
                name: "postalCode",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "addressId",
                type: InputType.Text,
                label: "Identificador",
                required: true,
                name: "addressId",
                placeholder: "Um apelido para este endereço"
            }
        }, {
            input: {
                id: "address",
                type: InputType.Text,
                label: "Logradouro",
                required: true,
                name: "address",
                placeholder: "Nome da Rua, Avenida, Travessa, etc."
            }
        }, {
            input: {
                id: "number",
                type: InputType.Text,
                label: "Número",
                required: true,
                name: "number",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "district",
                type: InputType.Text,
                label: "Bairro",
                required: true,
                name: "district",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "addressComplement",
                type: InputType.Text,
                label: "Complemento",
                name: "addressComplement",
                placeholder: "Mais informações que ajudem a achar o seu endereço"
            }
        }, {
            input: {
                id: "country",
                type: InputType.Text,
                label: "País",
                name: "country",
                placeholder: "País em que fica seu endereço"
            }
        }, {
            input: {
                id: "state",
                type: InputType.Text,
                label: "Estado",
                name: "state",
                placeholder: "Estado em que fica seu endereço"
            }
        }, {
            input: {
                id: "city",
                type: InputType.Text,
                label: "Cidade",
                name: "city",
                placeholder: "Município em que fica seu endereço"
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
                    url: "$ENV$/auth/login"
                }
            }
        }]
    }]
};