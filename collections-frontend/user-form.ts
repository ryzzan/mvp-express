import {
    ObjectToCode,
    FrontendFrameworkEnum,
    ButtonTypeEnum,
    InputTypeEnum,
    RequestTypeEnum,
    ActionVerbEnum
} from '../interfaces/frontend';
export const USER_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "user-form",
    title: "Usuário",
    form: [{
        id: "user",
        elements: [{
            input: {
                id: "uniqueId",
                type: InputTypeEnum.Text,
                label: "CPF",
                required: true,
                name: "uniqueId",
                placeholder: "Apenas números",
                // regex: /^\d+$/
            }
        }, {
            input: {
                id: "name",
                type: InputTypeEnum.Text,
                label: "Nome",
                required: true,
                name: "name",
                placeholder: "Nome completo"
            }
        }, {
            input: {
                id: "birthday",
                type: InputTypeEnum.Date,
                label: "Nascimento",
                required: true,
                name: "birthday",
                placeholder: "Nome completo"
            }
        }, {
            select: {
                id: "gender",
                label: "Gênero",
                required: true,
                name: "gender",
                options: {
                    type: RequestTypeEnum.Object,
                    object: [{
                        value: 'f',
                        valueView: 'Feminino'
                    }, {
                        value: 'm',
                        valueView: 'Masculino'
                    }]
                },
                placeholder: "Gênero para tratamento"
            }
        }, {
            input: {
                id: "contactId",
                type: InputTypeEnum.Text,
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
                id: "contactComplement",
                type: InputTypeEnum.Text,
                label: "Complemento",
                required: true,
                name: "contactComplement",
                placeholder: "Informação adicional do contato"
            }
        }, {
            input: {
                id: "postalCode",
                type: InputTypeEnum.Text,
                label: "CEP",
                required: true,
                name: "postalCode",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "addressId",
                type: InputTypeEnum.Text,
                label: "Identificador",
                required: true,
                name: "addressId",
                placeholder: "Um apelido para este endereço"
            }
        }, {
            input: {
                id: "address",
                type: InputTypeEnum.Text,
                label: "Logradouro",
                required: true,
                name: "address",
                placeholder: "Nome da Rua, Avenida, Travessa, etc."
            }
        }, {
            input: {
                id: "number",
                type: InputTypeEnum.Text,
                label: "Número",
                required: true,
                name: "number",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "district",
                type: InputTypeEnum.Text,
                label: "Bairro",
                required: true,
                name: "district",
                placeholder: "Código postal do seu endereço"
            }
        }, {
            input: {
                id: "addressComplement",
                type: InputTypeEnum.Text,
                label: "Complemento",
                name: "addressComplement",
                placeholder: "Mais informações que ajudem a achar o seu endereço"
            }
        }, {
            input: {
                id: "country",
                type: InputTypeEnum.Text,
                label: "País",
                name: "country",
                placeholder: "País em que fica seu endereço"
            }
        }, {
            input: {
                id: "state",
                type: InputTypeEnum.Text,
                label: "Estado",
                name: "state",
                placeholder: "Estado em que fica seu endereço"
            }
        }, {
            input: {
                id: "city",
                type: InputTypeEnum.Text,
                label: "Cidade",
                name: "city",
                placeholder: "Município em que fica seu endereço"
            }
        }, {
            input: {
                id: "connectionEmail",
                type: InputTypeEnum.Email,
                label: "E-mail",
                name: "connectionEmail",
                placeholder: "E-mail para conexão"
            }
        }, {
            input: {
                id: "connectionPassword",
                type: InputTypeEnum.Password,
                label: "Senha",
                name: "connectionPassword",
                placeholder: "Senha para conexão"
            }
        }, {
            button: {
                id: "create",
                type: ButtonTypeEnum.Submit,
                label: "CRIAR",
                icon: "add",
                action: {
                    type: RequestTypeEnum.Api,
                    verb: ActionVerbEnum.Post,
                    url: "$ENV$/auth/login"
                }
            }
        }]
    }]
};