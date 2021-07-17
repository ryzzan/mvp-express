import * as fs from 'fs';
import * as chp from 'child_process';
import { ComponentCodeType } from '../../../../../interfaces/frontend';
import { SharedFunctions } from '../shared-functions';

export class FileSystem {
    sharedFunction = new SharedFunctions;
    
    createProjectComponentPathAndFile = async (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType, isNest?: boolean) => {
        const projectFolder = projectPath.split(/[\/]+/).pop(),
        splitProjectFolder = projectPath.split(/[\/]+/),
        projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/'),
        projectAndComponentPath = `${projectPath}/src/app/components/${componentPath}`,
        nodeModulePath = `${projectPath}/node_modules`,
        componentPathAsClass = this.sharedFunction.setIdToClassName(componentPath);

        try {
            fs.readdirSync(projectPath);
            console.info(`Projeto existente.`);
        } catch (error) {
            console.info(`Pasta de projeto inexistente.`);
            chp.execSync(
                `git clone https://www.github.com/ryzzan/rapida-komenco ${projectFolder}`, 
                {cwd: projectFolderParent}
            );
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Pasta node_module existente.`);
        } catch (error) {
            console.info(`Pasta node_module inexistente.`);
            chp.execSync(
                `npm install`,
                {cwd: projectPath}
            );
        }

        try {
            console.info(`Pasta de componente existente.`);
            const projectAndComponent = fs.readdirSync(projectAndComponentPath);
            await this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType);
        } catch (error) {
            console.info(`Pasta de componente inexistente.`);
            try {
                fs.mkdirSync(projectAndComponentPath);
                await this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType);
            } catch (error) {
                await this.writeCodeToComponentFile(projectPath, componentPath, componentCode, componentCodeType);
            }
        }

        if (isNest) {
            console.info(`Component is nest of components`);
            const file = fs.readFileSync(`${projectPath}/src/app/modules/main/main-routing.module.ts`),
            newFile = file.toString().replace('children: [', `children: [{path: '${componentPath}', component: ${componentPathAsClass}Component},`),
            newFileImport = newFile.replace(`import { MainComponent } from './main.component';`, `import { MainComponent } from './main.component'; import { ${componentPathAsClass}Component } from '../../components/${componentPath}/${componentPath}.component';`),
            menu  = fs.readFileSync(`${projectPath}/src/app/modules/main/main.component.ts`),
            newMenu = menu.toString().replace('menu = [', `menu = [{router: '/main/${componentPath}',title: 'Mudar',icon: 'dashboard',itens: [],},`),
            newMenuImport = newMenu.replace(`import { MainComponent } from './main.component';`, `import { MainComponent } from './main.component'; import { ${componentPathAsClass}Component } from '../../components/${componentPath}/${componentPath}.component';`);

            try {
                const mainRoutingCodeSplit = file.toString().split(`component: ${componentPathAsClass}Component`),
                mainRoutingCodeImportSplit = file.toString().split(`${componentPathAsClass}Component`),
                menuCodeSplit = menu.toString().split(`router: '/main/${componentPath}'`);

                if (mainRoutingCodeSplit.length <= 1) {
                    console.info(`Creating route to ${componentPath}`);
                    fs.writeFileSync(`${projectPath}/src/app/modules/main/main-routing.module.ts`, newFile);
                }
                console.log(mainRoutingCodeImportSplit.length, 72);
                if (mainRoutingCodeImportSplit.length <= 1) {
                    console.info(`Importing component to main-routing`);
                    fs.writeFileSync(`${projectPath}/src/app/modules/main/main-routing.module.ts`, newFileImport);
                }
                
                if (menuCodeSplit.length <= 1) {
                    console.info(`Creating new item to menu`);
                    fs.writeFileSync(`${projectPath}/src/app/modules/main/main.component.ts`, newMenu);
                }

            } catch (error) {
                console.warn(error);
            }
        }
    }
    
    /** Create file and write in it */
    writeCodeToComponentFile = async (projectPath: string, componentPath: string, componentCode: string, componentCodeType: ComponentCodeType) => {
        let componentFilePath = '';

        if (componentCodeType === ComponentCodeType.Controller) 
            componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.ts`;
        if (componentCodeType === ComponentCodeType.Template) 
            componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.html`;

        try {
            const file = fs.readFileSync(componentFilePath);
            console.info(`Arquivo ${componentPath} existente.`);
            fs.writeFileSync(componentFilePath, componentCode);
            console.info(`Aquivo escrito com sucesso em ${componentFilePath}.`);
        } catch (error) {
            console.info(`Arquivo ${componentPath} inexistente.`);

            try {
                chp.execSync(
                    `ng g c components/${componentPath} --module modules/main`,
                    {cwd: projectPath}
                );
            } catch (error) {
                console.warn(error);
            }

            fs.writeFileSync(componentFilePath, componentCode);
            
            console.info(`Aquivo criado e escrito com sucesso em ${componentFilePath}`);
        }
        /** Make code prettier */

        /** Test and validate code */
    }
}