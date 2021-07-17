import { FrontendFrameworkEnum, ObjectToCode } from '../../interfaces/frontend';
export const PROJECT: ObjectToCode = {
    module: 'project',
    projectPath: '/home/ryzzan/Projects/Kunlatek/mvp-test',
    title: 'Projeto',
    frontendFramework: FrontendFrameworkEnum.Angular,
    nest: {
        id:'project',
        components: ['project-form', 'project-table'],
    }
}