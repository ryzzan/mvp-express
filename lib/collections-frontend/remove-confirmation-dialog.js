"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_CONFIRMATION_DIALOG = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.REMOVE_CONFIRMATION_DIALOG = {
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    module: "remove-confirmation-dialog",
    title: "Confirmar remoção",
    form: [{
            id: "remove-confirmation-dialog",
            title: "Confirmar ação de remoção",
            subtitle: "Os ítens apagados não poderão ser recuperados diretamente pelo sistema",
            dialog: {
                id: 'remove-conrfirmation-dialog',
                template: 'RemoveConfirmationDialog',
                dialogDataInterface: {
                    teste: 'string',
                    teste2: 'string2'
                }
            },
            actions: {
                id: "remove-confirmation-dialog-action",
                elements: [{
                        button: {
                            id: "remove",
                            type: frontend_1.ButtonTypeEnum.Delete,
                            label: "REMOVER",
                            icon: "delete",
                            action: {
                                type: frontend_1.RequestTypeEnum.Api,
                                verb: frontend_1.ActionVerbEnum.Post,
                                url: "$ENV$/acl"
                            }
                        }
                    }]
            }
        }]
};
