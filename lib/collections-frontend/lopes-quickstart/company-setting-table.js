"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_SETTING_TABLE = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.COMPANY_SETTING_TABLE = {
    module: "company-setting-table",
    title: "Empresas",
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    table: {
        id: "company-setting-table",
        title: "Empresas",
        data: {
            type: frontend_1.RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: "Empresa",
                },
                row: {
                    type: "string",
                    field: "companyName"
                }
            }, {
                column: {
                    label: "Mercado",
                },
                row: {
                    type: "string",
                    field: "market"
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
                                type: frontend_1.RequestTypeEnum.Link,
                                url: "/main/location/123"
                            },
                            label: "Configurar"
                        }],
                }
            }],
        object: [{
                companyName: "Lopes 1",
                market: "Primário",
            }, {
                companyName: "Lopes 2",
                market: "Secundário (Venda/locação)",
            }, {
                companyName: "Lopes 3",
                market: "Primário e Secundário (Venda/locação)",
            }, {
                companyName: "Lopes 4",
                market: "Primário e Secundário (Venda/locação)",
            }, {
                companyName: "Lopes 5",
                market: "Primário",
            }, {
                companyName: "Lopes 6",
                market: "Primário",
            }, {
                companyName: "Lopes 7",
                market: "Primário",
            }, {
                companyName: "Lopes 8",
                market: "Secundário (Venda)",
            }, {
                companyName: "Lopes 9",
                market: "Secundário (Locação)",
            }, {
                companyName: "Lopes 10",
                market: "Secundário (Venda/locação)",
            }],
        actions: {
            label: "Pesquisa de empresa",
            id: "company-search",
            elements: [{
                    input: {
                        label: "Empresa",
                        placeholder: "Pesquisar pelo nome da empresa",
                        name: "companyName",
                        type: frontend_1.FormInputTypeEnum.Text,
                        width: 380
                    }
                }, {
                    select: {
                        label: "Mercado",
                        name: "Market",
                        isMultiple: true,
                        optionsObject: [{
                                label: "Primário",
                                value: "Primário"
                            }, {
                                label: "Secundário (Locação)",
                                value: "Secundário (Locação)"
                            }, {
                                label: "Secundário (Venda)",
                                value: "Secundário (Venda)"
                            }, {
                                label: "Secundário (Venda/locação)",
                                value: "Secundário (Venda/locação)"
                            }]
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
