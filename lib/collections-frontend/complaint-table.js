"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLAINT_TABLE = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.COMPLAINT_TABLE = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: 'complaint-table',
    title: 'Denúncias',
    table: {
        id: 'complaint-table',
        title: 'Denúncias',
        actions: {
            id: 'complaint-table-form',
            label: 'Denúncias',
            elements: [{
                    input: {
                        label: 'Denunciante',
                        name: 'denunciator',
                        placeholder: 'Pesquisar por nome',
                        type: frontend_1.FormInputTypeEnum.Text
                    }
                }, {
                    input: {
                        label: 'Denunciado',
                        name: 'denounced',
                        placeholder: 'Pesquisar por nome',
                        type: frontend_1.FormInputTypeEnum.Text
                    }
                }]
        },
        data: {
            type: frontend_1.RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: 'Denunciante'
                },
                row: {
                    type: 'string',
                    field: 'denunciator'
                }
            }, {
                column: {
                    label: 'Denunciado'
                },
                row: {
                    type: 'string',
                    field: 'denounced'
                }
            }, {
                column: {
                    label: 'Mensagem denunciada'
                },
                row: {
                    type: 'string',
                    field: 'complaintMessage'
                }
            }, {
                column: {
                    label: 'Status'
                },
                row: {
                    type: 'string',
                    field: 'complaintStatus'
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
                                type: frontend_1.RequestTypeEnum.Link,
                                url: '/main/complaint/123'
                            },
                            label: 'Bloquear mensagem'
                        }, {
                            action: {
                                type: frontend_1.RequestTypeEnum.Link,
                                url: '/main/complaint/123'
                            },
                            label: 'Bloquear usuário'
                        }, {
                            action: {
                                type: frontend_1.RequestTypeEnum.Dialog,
                            },
                            label: 'Recusar denúncia',
                            dialog: {
                                templateFolder: 'remove-confirmation-dialog',
                                id: 'remove-confirmation-dialog',
                            }
                        }],
                }
            }],
        object: [{
                denunciator: 'Homer Simpson',
                denounced: 'Angelica Pickles',
                complaintMessage: 'Nordestino é uma praga no mundo',
                complaintStatus: 'Denunciado',
            }, {
                denunciator: 'Tina Belcher',
                denounced: 'Johnny Bravo',
                complaintMessage: 'Esse cara parece uma bicha',
                complaintStatus: 'Denunciado',
            }, {
                denunciator: 'Daria Morgendorffer',
                denounced: 'Grunkle Stan',
                complaintMessage: 'Todo chicano tem um sotaque meio bosta',
                complaintStatus: 'Aprovada',
            }, {
                denunciator: 'Stewie Griffin',
                denounced: 'Bobby Hill',
                complaintMessage: 'Se veste feito pobre e quer dar uma de bonzão',
                complaintStatus: 'Aprovada',
            }, {
                denunciator: 'Harley Quinn',
                denounced: 'Betty Boop',
                complaintMessage: 'Essas mulheres gordas querendo ter voz no mundo',
                complaintStatus: 'Aprovada',
            }]
    }
};
