"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_TABLE = void 0;
var frontend_1 = require("../../interfaces/frontend");
//Mostrar totais
exports.USER_TABLE = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: "user-table",
    title: "Usuários",
    table: {
        id: "user-table",
        title: "Usuários",
        data: {
            type: frontend_1.RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: "Usuário"
                },
                row: {
                    type: "string",
                    field: "username"
                }
            }, {
                column: {
                    label: "Vínculo"
                },
                row: {
                    type: "date",
                    field: "relatedCompanies"
                }
            }, {
                column: {
                    label: "Área"
                },
                row: {
                    type: "string",
                    field: "areas"
                }
            }, {
                column: {
                    label: "Data de expiração"
                },
                row: {
                    type: "string",
                    field: "expirationDate"
                }
            }, {
                column: {
                    label: "Situação"
                },
                row: {
                    type: "string",
                    field: "status"
                }
            }, {
                column: {
                    label: "Ações"
                },
                row: {
                    type: "menu",
                    icon: "more_vert",
                    menu: [{
                            action: {
                                type: frontend_1.RequestTypeEnum.Dialog,
                            },
                            label: "Remover",
                            dialog: {
                                templateFolder: "remove-confirmation-dialog",
                                id: "remove-confirmation-dialog",
                            }
                        }],
                }
            }],
        object: [{
                username: "Agenor de Miranda Araújo Neto",
                expirationDate: "04/04/1958",
                relatedCompanies: "Empresa 1, Empresa 2, Empresa 3",
                status: "?",
                areas: "Área 1, Área 2",
            }, {
                username: "Aroldo Alves Sobrinho",
                expirationDate: "17/02/1953",
                relatedCompanies: "Empresa 3, Empresa 5, Empresa 6",
                status: "?",
                areas: "Área 1, Área 2",
            }, {
                username: "Larissa de Macedo Machado",
                expirationDate: "30/03/1993",
                relatedCompanies: "Empresa 1, Empresa 4, Empresa 6",
                status: "?",
                areas: "Área 1, Área 2",
            }, {
                username: "Renato Manfredini Júnior",
                expirationDate: "27/03/1960",
                relatedCompanies: "Empresa 2, Empresa 4, Empresa 5",
                status: "?",
                areas: "Área 1, Área 2",
            }],
        actions: {
            label: "Pesquisa de usuário",
            id: "user-search",
            elements: [{
                    input: {
                        label: "Usuário",
                        placeholder: "Pesquisar por CPF, nome completo ou de usuário",
                        name: "name",
                        type: frontend_1.FormInputTypeEnum.Text,
                        width: 380
                    }
                }, {
                    select: {
                        label: "Vínculo (Empresa)",
                        name: "relatedCompany",
                        isMultiple: true,
                        optionsObject: [{
                                label: "Empresa 1",
                                value: "Empresa 1"
                            }, {
                                label: "Empresa 2",
                                value: "Empresa 2"
                            }, {
                                label: "Empresa 3",
                                value: "Empresa 3"
                            }, {
                                label: "Empresa 4",
                                value: "Empresa 4"
                            }, {
                                label: "Empresa 5",
                                value: "Empresa 5"
                            }, {
                                label: "Empresa 6",
                                value: "Empresa 6"
                            }],
                        isRequired: true,
                    }
                }, {
                    select: {
                        label: "Área",
                        name: "area",
                        isMultiple: true,
                        optionsObject: [{
                                label: "Área 1",
                                value: "Área 1"
                            }, {
                                label: "Área 2",
                                value: "Área 2"
                            }, {
                                label: "Área 3",
                                value: "Área 3"
                            }, {
                                label: "Área 4",
                                value: "Área 4"
                            }, {
                                label: "Área 5",
                                value: "Área 5"
                            }, {
                                label: "Área 6",
                                value: "Área 6"
                            }],
                        isRequired: true,
                    }
                }, {
                    button: {
                        type: frontend_1.FormButtonTypeEnum.Button,
                        label: "Baixar relatório"
                    }
                }]
        }
    }
};
