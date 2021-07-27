import * as fs from 'fs';
import * as chp from 'child_process';
import {
    CreateProjectComponentPathAndFile
} from '../../../../../interfaces/backend';

export class ArchitectureToNest {
    async createProjectComponentPathAndFile({
        projectPath,
        serviceEndPoint
    }: CreateProjectComponentPathAndFile) {
        const projectFolder = projectPath.split(/[\/]+/).pop(),
            splitProjectFolder = projectPath.split(/[\/]+/),
            projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/'),
            nodeModulePath = `${projectPath}/node_modules`;

        try {
            fs.readdirSync(projectPath);
            console.info(`Projeto existente.`);
        } catch (error) {
            console.info(`Pasta de projeto inexistente.`);
            chp.execSync(
                `nest new ${projectFolder}`, {
                    cwd: projectFolderParent
                }
            );
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Pasta node_module existente.`);
        } catch (error) {
            console.info(`Pasta node_module inexistente.`);
            chp.execSync(
                `npm install`, {
                    cwd: projectPath
                }
            );
        }

        chp.execSync(
            `ng g resource ${serviceEndPoint}`, {
                cwd: projectPath
            }
        );

        return {
            message: `CRUD over ${serviceEndPoint} was just created. Go, go, go!`
        }
    }

    // async createCrudController = () => {

    // }
}