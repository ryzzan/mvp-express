"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECOVER_PASSWORD = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.RECOVER_PASSWORD = {
    frontendFramework: frontend_1.FrontendFramework.Angular,
    module: "recover-password",
    form: [{
            id: "recoverPassword",
            elements: [{
                    input: {
                        id: "email",
                        type: frontend_1.InputType.Email,
                        label: "E-mail",
                        required: true,
                        name: "email",
                        placeholder: "E-mail do usuário que esqueceu a senha",
                    }
                }, {
                    input: {
                        id: "repeatEmail",
                        type: frontend_1.InputType.Email,
                        label: "Repetir e-mail",
                        required: true,
                        name: "repeatEmail",
                        placeholder: "Repetir e-mail do usuário",
                    }
                }, {
                    button: {
                        id: "create",
                        type: frontend_1.ButtonType.Submit,
                        label: "ENVIAR",
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
