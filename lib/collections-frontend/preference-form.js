"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFERENCE_FORM = void 0;
var frontend_1 = require("../interfaces/frontend");
exports.PREFERENCE_FORM = {
    module: 'preference-form',
    title: 'Interesses',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    form: {
        title: 'Interesse',
        label: 'Interesse',
        id: 'preference-form',
        elements: [{
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do interesse',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true,
                }
            }],
        actions: [{
                button: {
                    label: 'Criar',
                    type: frontend_1.FormButtonTypeEnum.Submit,
                }
            }]
    }
};
