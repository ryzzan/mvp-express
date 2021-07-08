import { FrontendFrameworkEnum, ObjectToCode, RequestTypeEnum } from "../interfaces/frontend";

export const PERSON_TABLE: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: 'person-table',
    title: 'Pessoas',
    table: {
        id: 'person-table',
        data: {
            type: RequestTypeEnum.Object,
        },
        elements: [{
            column: {
                label: 'Nome'
            },
            row: {
                type: 'string',
                field: 'name'
            }
        }, {
            column: {
                label: 'Nascimento'
            },
            row: {
                type: 'date',
                field: 'birthday'
            }
        }, {
            column: {
                label: 'Gênero'
            },
            row: {
                type: 'string',
                field: 'gender'
            }
        }, {
            column: {
                label: 'Gênero'
            },
            row: {
                type: 'menu',
                menu: [{
                    action: {
                        type: RequestTypeEnum.Link,
                        url: '/main/person/123'
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
            name: 'Agenor de Miranda Araújo Neto',
            birthday: '04/04/1958',
            gender: 'Masculino'
        }, {
            name: 'Aroldo Alves Sobrinho',
            birthday: '17/02/1953',
            gender: 'Masculino'
        }, {
            name: 'Larissa de Macedo Machado',
            birthday: '30/03/1993',
            gender: 'Masculino'
        }, {
            name: 'Renato Manfredini Júnior',
            birthday: '27/03/1960',
            gender: 'Masculino'
        }]
    }
};