import * as fs from 'fs';
import * as chp from 'child_process';
import {
  ComponentCodeType,
  CreateProjectComponentPathAndFile,
} from '../../../../../interfaces/frontend';

export class FileSystem {
  async createProjectComponentPathAndFile({
    projectPath,
    componentPath,
    componentCode,
    componentCodeType,
  }: CreateProjectComponentPathAndFile): Promise<void> {
    const projectFolder = projectPath.split(/[\/]+/).pop();
    const splitProjectFolder = projectPath.split(/[\/]+/);
    const projectFolderParent = splitProjectFolder
      .slice(0, splitProjectFolder.length - 1)
      .join('/');
    const projectAndComponentPath = `${projectPath}/src/app/components/${componentPath}`;
    const nodeModulePath = `${projectPath}/node_modules`;

    try {
      fs.readdirSync(projectPath);
      console.info(`Projeto existente.`);
    } catch (error) {
      console.info(`Pasta de projeto inexistente.`);
      chp.execSync(
        `git clone https://www.github.com/ryzzan/rapida-komenco ${projectFolder}`,
        { cwd: projectFolderParent },
      );
    }

    try {
      fs.readdirSync(nodeModulePath);
      console.info(`Pasta node_module existente.`);
    } catch (error) {
      console.info(`Pasta node_module inexistente.`);
      chp.execSync(`npm install`, { cwd: projectPath });
    }

    try {
      console.info(`Pasta de componente existente.`);
      await this.writeCodeToComponentFile({
        projectPath,
        componentPath,
        componentCode,
        componentCodeType,
      });
    } catch (error) {
      console.info(`Pasta de componente inexistente.`);
      try {
        fs.mkdirSync(projectAndComponentPath);
        await this.writeCodeToComponentFile({
          projectPath,
          componentPath,
          componentCode,
          componentCodeType,
        });
      } catch (error) {
        await this.writeCodeToComponentFile({
          projectPath,
          componentPath,
          componentCode,
          componentCodeType,
        });
      }
    }
  }

  /** Create file and write in it */
  async writeCodeToComponentFile({
    projectPath,
    componentPath,
    componentCode,
    componentCodeType,
  }: CreateProjectComponentPathAndFile): Promise<void> {
    let componentFilePath = '';

    if (componentCodeType === ComponentCodeType.Controller)
      componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.ts`;
    if (componentCodeType === ComponentCodeType.Template)
      componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.html`;

    try {
      console.info(`Arquivo ${componentPath} existente.`);
      fs.writeFileSync(componentFilePath, componentCode);
      console.info(`Aquivo escrito com sucesso em ${componentFilePath}.`);
    } catch (error) {
      console.info(`Arquivo ${componentPath} inexistente.`);

      try {
        chp.execSync(
          `ng g c components/${componentPath} --module modules/main`,
          { cwd: projectPath },
        );
      } catch (error) {
        console.warn(error);
      }

      fs.writeFileSync(componentFilePath, componentCode);

      console.info(
        `Aquivo criado e escrito com sucesso em ${componentFilePath}`,
      );
    }
  }
}
