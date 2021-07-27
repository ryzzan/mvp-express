import * as fs from 'fs';
import * as chp from 'child_process';
import {
    ComponentCodeType,
    CreateProjectComponentPathAndFile,
    ObjectToCode
} from '../../../../../interfaces/frontend';

export class ArchitectureToAngular {
    async createProjectComponentPathAndFile({
        projectPath,
        componentCode,
        componentCodeType,
        objectToCode
    }: CreateProjectComponentPathAndFile): Promise < void > {
        const projectFolder = projectPath.split(/[\/]+/).pop();
        const splitProjectFolder = projectPath.split(/[\/]+/);
        const projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/');
        const moduleFolder = `${projectPath}/src/app/pages/${objectToCode.module}`;
        const nodeModulePath = `${projectPath}/node_modules`;
        
        let componentPath = '';
        let componentFolder = '';
        if (objectToCode.form) {
            componentFolder = `${objectToCode.module}-form`;
            componentPath = `${moduleFolder}/${componentFolder}`; 
        }
        if (objectToCode.table) {
            componentFolder = `${objectToCode.module}-table`;
            componentPath = `${moduleFolder}/${componentFolder}`; 
        }

        try {
            fs.readdirSync(projectPath);
            console.info(`Projeto existente.`);
        } catch (error) {
            console.info(`Pasta de projeto inexistente.`);
            chp.execSync(
                `git clone https://github.com/robertobdev/my-admin ${projectFolder}`, {
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

        try {
            console.info(`Pasta de módulo de componente existente.`);
            fs.readdirSync(moduleFolder);
            await this.writeCodeToComponentFile(
                componentPath,
                projectPath,
                componentFolder,
                componentCode,
                componentCodeType,
                objectToCode
            );
        } catch (error) {
            console.info(`Pasta de módulo de componente inexistente.`);
            
            chp.execSync(
                `ng g m pages/${objectToCode.module} --routing --routing-scope Child --route ${objectToCode.module} --module pages`, {
                    cwd: projectPath
                }
            );
            await this.writeCodeToComponentFile(
                componentPath,
                projectPath, 
                componentFolder, 
                componentCode, 
                componentCodeType,
                objectToCode
            );
        }
    }

    /** Create file and write in it */
    writeCodeToComponentFile = async (
        componentPath: string,
        projectPath: string, 
        componentFolder: string, 
        componentCode: string, 
        componentCodeType: ComponentCodeType,
        objectToCode: ObjectToCode
    ) => {
        let componentFilePath = '';

        if (componentCodeType === ComponentCodeType.Controller)
            componentFilePath = `${componentPath}/${componentFolder}.component.ts`;
        if (componentCodeType === ComponentCodeType.Template)
            componentFilePath = `${componentPath}/${componentFolder}.component.html`;
        if (componentCodeType === ComponentCodeType.Service)
            componentFilePath = `${componentPath}/${componentFolder}.service.ts`;

        
        console.info(`Arquivo ${componentFolder} inexistente.`);
        
        try {
            chp.execSync(
                `ng g c pages/${objectToCode.module}/${componentFolder} --module ${objectToCode.module}`, {
                    cwd: projectPath
                }
            );
        } catch (error) {
            console.warn(error);
        }

        fs.writeFileSync(componentFilePath, componentCode);

        console.info(`Aquivo criado e escrito com sucesso em ${componentFilePath}`);
        /** Make code prettier */

        /** Test and validate code */
    }
}