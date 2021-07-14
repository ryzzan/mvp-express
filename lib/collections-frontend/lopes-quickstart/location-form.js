"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION_FORM = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.LOCATION_FORM = {
    module: 'location-form',
    title: 'Região',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    form: {
        id: 'location-form',
        label: 'Região',
        title: 'Região',
        elements: [{
                input: {
                    label: 'Nome da região',
                    name: 'locationName',
                    placeholder: 'Defina a identificação do local',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                input: {
                    label: 'Latitude',
                    name: 'latitude',
                    placeholder: 'Latitude',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                input: {
                    label: 'Longitude',
                    name: 'longitude',
                    placeholder: 'Longitude',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                input: {
                    label: 'Raio',
                    name: 'radius',
                    placeholder: 'Em quilômêtros',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }, {
                input: {
                    label: 'Permissão',
                    name: 'permission',
                    placeholder: 'São Paulo - Não entendi',
                    type: frontend_1.FormInputTypeEnum.Text,
                    isRequired: true
                }
            }],
        actions: [{
                button: {
                    type: frontend_1.FormButtonTypeEnum.Submit,
                    label: "Criar",
                }
            }]
    }
};
