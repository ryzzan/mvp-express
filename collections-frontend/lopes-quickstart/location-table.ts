import { FormButtonTypeEnum, FormInputTypeEnum, FrontendFrameworkEnum, ObjectToCode, RequestTypeEnum } from "../../interfaces/frontend";

export const LOCATION_TABLE: ObjectToCode = {
    module: "location-table",
    title: "Regiões",
    frontendFramework: FrontendFrameworkEnum.Angular,
    table: {
        id: "location-table",
        title: "Regiões",
        data: {
            type: RequestTypeEnum.Object,            
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
                        type: RequestTypeEnum.Api,
                        url: '/main/location/123'
                    },
                    label: 'Editar'
                }, {
                    action: {
                        type: RequestTypeEnum.Dialog,
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
                    type: FormInputTypeEnum.Text,
                    width: 380
                }
            }, {
                button: {
                    type: FormButtonTypeEnum.Button,
                    label: "Baixar relatório"
                }
            }]
        }
    }
}