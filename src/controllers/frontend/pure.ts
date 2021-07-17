/**
 * TO-DO
 *  - Tree
 *  - Services
 */
import { ObjectToCode } from '../../../interfaces/frontend';
import { FormPure } from './pure/form';
//  import { TablePure } from './pure/table';
//  import { TreePure } from './pure/tree';

export class CodeToPure {
  formPure = new FormPure();
  //  tablePure = new TablePure;
  //  treePure = new TreePure;

  public setPureCode = (objectToCode: ObjectToCode) => {
    let codeHtml = '';
    let codeDirective = '';
    let codeInterface = '';

    if (objectToCode.form) {
      codeHtml += this.formPure.setFormHtml(objectToCode.form);
      codeDirective += this.formPure.setFormDirective(objectToCode.form);
      codeInterface += this.formPure.setFormInterface(objectToCode.form);
    }

    //  if (objectToCode.table) {
    //      codeHtml += this.tablePure.setTableHtml(objectToCode.table);
    //      codeDirective += this.tablePure.setTableDirective(objectToCode.table);
    //      codeInterface +=  this.tablePure.setTableInterface(objectToCode.table);
    //  }

    //  if (objectToCode.tree) {
    //      codeHtml += this.treePure.setTreeHtml(objectToCode.tree);
    //      codeDirective += this.treePure.setTreeDirective(objectToCode.tree);
    //      codeInterface +=  this.treePure.setTreeInterface(objectToCode.tree);
    //  }

    return {
      html: codeHtml,
      directive: codeDirective,
      interface: codeInterface,
    };
  };
}
