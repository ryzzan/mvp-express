import {
    FormButtonTypeEnum,
    FormInputTypeEnum,
    FrontendFrameworkEnum,
    ObjectToCode,
    RequestTypeEnum,
} from '../../interfaces/frontend';

export const LOCATION_TABLE: ObjectToCode = {
    module: 'application',
    title: 'Aplicativos',
    frontendFramework: FrontendFrameworkEnum.Angular,
    projectPath: '/home/ryzzan/Projescts/Lopes/admin',
    table: {
        title: 'Aplicativos',
        data: {
            type: RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: 'Aplicativo',
                },
                row: {
                    type: 'string',
                    field: 'applicationName',
                },
            },
            {
                column: {
                    label: 'Funcionalidades',
                },
                row: {
                    type: 'string',
                    field: 'functionalities',
                },
            },
            {
                column: {
                    label: 'Ações',
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [{
                            action: {
                                type: RequestTypeEnum.Api,
                                url: '/main/location/123',
                            },
                            label: 'Editar',
                        },
                        // {
                        //     action: {
                        //         type: RequestTypeEnum.Dialog,
                        //     },
                        //     label: 'Remover',
                        //     dialog: {
                        //         templateFolder: 'remove-confirmation-dialog',
                        //         id: 'remove-confirmation-dialog',
                        //     },
                        // },
                    ],
                },
            },
        ],
        object: [{
                applicationName: 'São Paulo Capital - SP',
                functionalities: 'Tratamento de usuário, Tratamento de regiões, Configurações de empresas, Tratamento de aplicativos, Tratamento de grupos',
            },
            {
                applicationName: 'Alphaville, Barueri - SP',
                functionalities: 'Tratamento de usuário, Funcionalidade 1, Funcionalidade 2, Funcionalidade 3',
            },
            {
                applicationName: 'Campinas - SP',
                functionalities: 'Tratamento de usuário, Funcionalidade 4, Funcionalidade 5, Funcionalidade 6',
            },
            {
                applicationName: 'Grande ABC - SP',
                functionalities: 'Tratamento de usuário, Funcionalidade 7, Funcionalidade 8, Funcionalidade 9',
            },
            {
                applicationName: 'Guarulhos - SP',
                functionalities: 'Tratamento de usuário, Funcionalidade 10, Funcionalidade 11, Funcionalidade 12',
            },
        ],
        actions: {
            label: 'Pesquisa de usuário',
            elements: [{
                    input: {
                        label: 'Aplicativo',
                        placeholder: 'Pesquisar pelo nome do aplicativo',
                        name: 'applicationName',
                        type: FormInputTypeEnum.Text,
                        width: 380,
                    },
                },
                {
                    button: {
                        type: FormButtonTypeEnum.Button,
                        label: 'Baixar relatório',
                    },
                },
            ],
        },
    },
};