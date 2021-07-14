"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION_TABLE = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.LOCATION_TABLE = {
    module: "location-table",
    title: "Regiões",
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    table: {
        id: "location-table",
        title: "Regiões",
        data: {
            type: frontend_1.RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: "Região",
                },
                row: {
                    type: "string",
                    field: "locationName"
                }
            }, {
                column: {
                    label: 'Ações'
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [{
                            action: {
                                type: frontend_1.RequestTypeEnum.Api,
                                url: '/main/location/123'
                            },
                            label: 'Editar'
                        }, {
                            action: {
                                type: frontend_1.RequestTypeEnum.Dialog,
                            },
                            label: 'Remover',
                            dialog: {
                                templateFolder: 'remove-confirmation-dialog',
                                id: 'remove-confirmation-dialog',
                            }
                        }],
                }
            }],
        object: [{
                locationName: 'São Paulo Capital - SP',
            }, {
                locationName: 'Alphaville, Barueri - SP',
            }, {
                locationName: 'Campinas - SP',
            }, {
                locationName: 'Grande ABC - SP',
            }, {
                locationName: 'Guarulhos - SP',
            }, {
                locationName: 'Mogi das Cruzes - SP',
            }, {
                locationName: 'Sorocaba - SP',
            }, {
                locationName: 'Rio Grande do Sul',
            }, {
                locationName: 'Bahia',
            }, {
                locationName: 'Ceará',
            }],
        actions: {
            label: "Pesquisa de usuário",
            id: "user-search",
            elements: [{
                    input: {
                        label: "Região",
                        placeholder: "Pesquisar pelo nome da região",
                        name: "locationName",
                        type: frontend_1.FormInputTypeEnum.Text,
                        width: 380
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
