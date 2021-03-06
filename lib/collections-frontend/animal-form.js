"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANIMAL_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.ANIMAL_FORM = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: "animal-form",
    title: "Animais",
    form: [{
            id: "animal-form",
            title: "Animal",
            subtitle: "Administrar dados de um animal",
            tabs: [{
                    id: "tab-animal",
                    label: "Dados do animal",
                    elements: [{
                            input: {
                                id: "animal-unique-id",
                                type: frontend_1.InputTypeEnum.Text,
                                label: "Pedigree",
                                name: "animalUniqueId",
                                placeholder: "Apenas números",
                                // regex: /^\d+$/
                            }
                        }, {
                            input: {
                                id: "animal-name",
                                type: frontend_1.InputTypeEnum.Text,
                                label: "Nome",
                                required: true,
                                name: "animalName",
                                placeholder: "Nome do animal"
                            }
                        }, {
                            input: {
                                id: "animal-birthday",
                                type: frontend_1.InputTypeEnum.Date,
                                label: "Aniversário",
                                required: true,
                                name: "animalBirthday",
                                placeholder: "Data exata ou aproximada"
                            }
                        }, {
                            select: {
                                id: "animal-gender",
                                label: "Gênero",
                                required: true,
                                name: "animalGender",
                                options: {
                                    type: frontend_1.RequestTypeEnum.Object,
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
                            select: {
                                id: "fur",
                                label: "Pelagem",
                                required: true,
                                name: "fur",
                                options: {
                                    type: frontend_1.RequestTypeEnum.Object,
                                    object: [{
                                            value: "Pelagem 1",
                                            valueView: "Pelagem 1"
                                        }, {
                                            value: "Pelagem 2",
                                            valueView: "Pelagem 2"
                                        }, {
                                            value: "Pelagem 3",
                                            valueView: "Pelagem 3"
                                        }, {
                                            value: "Pelagem 4",
                                            valueView: "Pelagem 4"
                                        }, {
                                            value: "Pelagem 5",
                                            valueView: "Pelagem 5"
                                        }]
                                },
                                placeholder: "Cor do pêlo do animal"
                            }
                        }, {
                            select: {
                                id: "species",
                                label: "Espécie",
                                required: true,
                                name: "species",
                                options: {
                                    type: frontend_1.RequestTypeEnum.Object,
                                    object: [{
                                            value: "Canina",
                                            valueView: "Canina"
                                        }, {
                                            value: "Felina",
                                            valueView: "Felina"
                                        }, {
                                            value: "Espécie 3",
                                            valueView: "Espécie 3"
                                        }, {
                                            value: "Espécie 4",
                                            valueView: "Espécie 4"
                                        }, {
                                            value: "Espécie 5",
                                            valueView: "Espécie 5"
                                        }]
                                },
                                placeholder: "Espécie do animal"
                            }
                        }, {
                            select: {
                                id: "race",
                                label: "Raça",
                                required: true,
                                name: "race",
                                options: {
                                    type: frontend_1.RequestTypeEnum.Object,
                                    object: [{
                                            value: 'Raça não definida',
                                            valueView: 'Raça não definida'
                                        }, {
                                            value: 'Raça 2',
                                            valueView: 'Raça 2'
                                        }, {
                                            value: 'Raça 3',
                                            valueView: 'Raça 3'
                                        }, {
                                            value: 'Raça 4',
                                            valueView: 'Raça 4'
                                        }, {
                                            value: 'Raça 5',
                                            valueView: 'Raça 5'
                                        }]
                                },
                                placeholder: "Raça do animal"
                            }
                        }]
                }, {
                    id: "tab-animal",
                    label: "Saúde do animal",
                    elements: [{
                            array: {
                                id: "vaccines",
                                label: "Vacina",
                                elements: [{
                                        input: {
                                            id: "vaccineType",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Tipo de vacina",
                                            name: "vaccineType",
                                            placeholder: "Doença que a vacina combate",
                                            // regex: /^\d+$/
                                        }
                                    }, {
                                        input: {
                                            id: "vaccineBrand",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Marca da vacina",
                                            required: true,
                                            name: "vaccineBrand",
                                            placeholder: "Marca do tipo de vacina"
                                        }
                                    }, {
                                        input: {
                                            id: "vaccineDate",
                                            type: frontend_1.InputTypeEnum.Date,
                                            label: "Data da aplicação",
                                            required: true,
                                            name: "vaccineDate",
                                            placeholder: "Data exata da aplicação"
                                        }
                                    }, {
                                        input: {
                                            id: "veterinaryUniqueId",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "CRMV de quem aplicou",
                                            required: true,
                                            name: "veterinaryUniqueId",
                                            placeholder: "CRMV do  veterinário que aplicou"
                                        }
                                    }]
                            }
                        }, {
                            array: {
                                id: "vermifuge",
                                label: "Vermífugo",
                                elements: [{
                                        input: {
                                            id: "vermifugeBrand",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Marca do vermífugo",
                                            required: true,
                                            name: "vermifugeBrand",
                                            placeholder: "Marca do vermífugo"
                                        }
                                    }, {
                                        input: {
                                            id: "vermifugeDate",
                                            type: frontend_1.InputTypeEnum.Date,
                                            label: "Data da aplicação",
                                            required: true,
                                            name: "vermifugeDate",
                                            placeholder: "Data exata da aplicação"
                                        }
                                    }, {
                                        input: {
                                            id: "vermifugePersonUniqueId",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "CPF de quem aplicou",
                                            required: true,
                                            name: "vermifugePersonUniqueId",
                                            placeholder: "Apenas números"
                                        }
                                    }]
                            }
                        }]
                }, {
                    id: "tab-guardian",
                    label: "Dados do tutor",
                    elements: [{
                            input: {
                                id: "uniqueId",
                                type: frontend_1.InputTypeEnum.Text,
                                label: "CPF",
                                required: true,
                                name: "uniqueId",
                                placeholder: "Apenas números",
                                // regex: /^\d+$/
                            }
                        }, {
                            input: {
                                id: "name",
                                type: frontend_1.InputTypeEnum.Text,
                                label: "Nome",
                                required: true,
                                name: "name",
                                placeholder: "Nome completo"
                            }
                        }, {
                            input: {
                                id: "birthday",
                                type: frontend_1.InputTypeEnum.Date,
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
                                    type: frontend_1.RequestTypeEnum.Object,
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
                        }]
                }, {
                    id: "tab-contact",
                    label: "Contatos do tutor",
                    elements: [{
                            array: {
                                id: "contacts",
                                label: "Contato",
                                elements: [{
                                        input: {
                                            id: "contactId",
                                            type: frontend_1.InputTypeEnum.Text,
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
                                                type: frontend_1.RequestTypeEnum.Object,
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
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Valor",
                                            required: true,
                                            name: "value",
                                            placeholder: "Valor correspondente ao contato"
                                        }
                                    }, {
                                        input: {
                                            id: "contactComplement",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Complemento",
                                            required: true,
                                            name: "contactComplement",
                                            placeholder: "Informação adicional do contato"
                                        }
                                    }]
                            }
                        }]
                }, {
                    id: "tab-address",
                    label: "Endereços do tutor",
                    elements: [{
                            array: {
                                id: "addresses",
                                label: "Endereço",
                                elements: [{
                                        input: {
                                            id: "postalCode",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "CEP",
                                            required: true,
                                            name: "postalCode",
                                            placeholder: "Código postal do seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "addressId",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Identificador",
                                            required: true,
                                            name: "addressId",
                                            placeholder: "Um apelido para este endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "address",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Logradouro",
                                            required: true,
                                            name: "address",
                                            placeholder: "Nome da Rua, Avenida, Travessa, etc."
                                        }
                                    }, {
                                        input: {
                                            id: "number",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Número",
                                            required: true,
                                            name: "number",
                                            placeholder: "Código postal do seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "district",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Bairro",
                                            required: true,
                                            name: "district",
                                            placeholder: "Código postal do seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "addressComplement",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Complemento",
                                            name: "addressComplement",
                                            placeholder: "Mais informações que ajudem a achar o seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "country",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "País",
                                            name: "country",
                                            placeholder: "País em que fica seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "state",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Estado",
                                            name: "state",
                                            placeholder: "Estado em que fica seu endereço"
                                        }
                                    }, {
                                        input: {
                                            id: "city",
                                            type: frontend_1.InputTypeEnum.Text,
                                            label: "Cidade",
                                            name: "city",
                                            placeholder: "Município em que fica seu endereço"
                                        }
                                    }]
                            }
                        }]
                }],
            actions: {
                id: "animal-form-submit",
                elements: [{
                        button: {
                            id: "create",
                            type: frontend_1.ButtonTypeEnum.Submit,
                            label: "CRIAR",
                            icon: "add",
                            action: {
                                type: frontend_1.RequestTypeEnum.Api,
                                verb: frontend_1.ActionVerbEnum.Post,
                                url: "$ENV$/auth/login"
                            }
                        }
                    }],
            },
        }],
};
