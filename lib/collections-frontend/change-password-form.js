"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_PASSWORD = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.CHANGE_PASSWORD = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "change-password",
    form: [{
            id: "changePassword",
            elements: [{
                    input: {
                        id: "password",
                        type: frontend_1.InputType.Password,
                        label: "Senha",
                        required: true,
                        name: "password",
                        placeholder: "Mínimo de 8 caracteres",
                    }
                }, {
                    input: {
                        id: "repeatPassword",
                        type: frontend_1.InputType.Password,
                        label: "Repetir senha",
                        required: true,
                        name: "repeatPassword",
                        placeholder: "Repita sua nova senha",
                    }
                }, {
                    button: {
                        id: "create",
                        type: frontend_1.ButtonType.Submit,
                        label: "ALTERAR",
                        icon: "add",
                        action: {
                            type: frontend_1.ActionType.Api,
                            verb: frontend_1.ActionVerb.Post,
                            url: "$ENV$/acl"
                        }
                    }
                }]
        }]
};
