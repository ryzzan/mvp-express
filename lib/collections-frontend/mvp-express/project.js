"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT = void 0;
var frontend_1 = require("../../interfaces/frontend");
exports.PROJECT = {
    module: 'project',
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    title: 'Projeto',
    frontendFramework: frontend_1.FrontendFrameworkEnum.Angular,
    nest: {
        id: 'project',
        components: ['project-form', 'project-table'],
    }
};
