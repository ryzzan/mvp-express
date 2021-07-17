import {
  RequestTypeEnum,
  TableElementInterface,
  TableInterface,
} from '../../../../interfaces/frontend';
import { SharedFunctions } from './shared-functions';
import { FormAngular } from './form';

export class TableAngular {
  sharedFunctions = new SharedFunctions();
  form = new FormAngular();

  setTableHtml = (table: TableInterface) => {
    let codeHtml = '';
    let rowMenu = '';
    let codeTable = '';
    let codeTableForm = '';
    const array = table.elements;
    const tableIdAsPropertyName = this.sharedFunctions.setIdToPropertyName(
      table.id,
    );
    const tableIdAsClassName = this.sharedFunctions.setIdToClassName(table.id);

    /**
     * Form over table
     */
    if (table.actions) {
      const form = table.actions;
      const importObject = {};
      const formIdAsClassName = this.sharedFunctions.setIdToClassName(form?.id);
      const formPropertyName = this.sharedFunctions.setIdToPropertyName(
        form?.id,
      );

      codeTableForm += `<mat-card>
                <mat-card-header>
                    <mat-card-subtitle>
                        Filtragem <mat-icon>search</mat-icon>
                    </mat-card-subtitle>
                </mat-card-header>
                <form id="${
                  form.id
                }" [formGroup]="${formPropertyName}Form" (ngSubmit)="${formPropertyName}Submit()">
                    ${this.form.setFormHtml(table.actions, true)}
                </form>
            </mat-card>`;
    }

    /**
     * Elements over table
     */
    array.forEach((element: TableElementInterface) => {
      let rowElement = '';
      let menuButtonAction = '';
      if (element.row.type !== 'menu')
        rowElement = `{{element.${element.row.field}}}`;
      if (element.row.type === 'menu') {
        /** Trigger to menu */
        rowElement += `<button mat-icon-button class="icon" aria-label="${tableIdAsClassName}" [matMenuTriggerFor]="${tableIdAsPropertyName}Menu">`;
        rowElement += `<mat-icon>${element.row.icon}</mat-icon>`;
        rowElement += `</button>`;
        /** Menu itself */
        rowMenu += `<mat-menu #${tableIdAsPropertyName}Menu="matMenu">`;
        element.row.menu?.forEach(menuItem => {
          menuButtonAction = '';
          if (
            menuItem.action.type &&
            menuItem.action.type == RequestTypeEnum.Link
          )
            menuButtonAction = `[routerLink]="['${menuItem.action.url}']"`;
          if (menuItem.dialog && menuItem.dialog?.templateFolder) {
            const dialogTemplateAsPropertyName =
              this.sharedFunctions.setIdToPropertyName(
                menuItem.dialog?.templateFolder,
              );
            menuButtonAction = `(click)="${dialogTemplateAsPropertyName}OpenDialog()"`;
          }

          rowMenu += `<button mat-menu-item ${menuButtonAction}>`;
          rowMenu += menuItem.icon
            ? `<mat-icon>${menuItem.icon}</mat-icon>`
            : '';
          rowMenu += `<span>${menuItem.label}</span>`;
          rowMenu += `</button>`;
        });
        rowMenu += `</mat-menu>`;
      }
      codeTable += `<ng-container matColumnDef="${element.row.field}">`;
      codeTable += `<th mat-header-cell *matHeaderCellDef> ${element.column.label} </th>`;
      codeTable += `<td mat-cell *matCellDef="let element"> ${rowElement} </td>`;
      codeTable += `</ng-container>`;
    });

    codeTable += `<tr mat-header-row *matHeaderRowDef="${tableIdAsPropertyName}DisplayedColumns"></tr>`;
    codeTable += `<tr mat-row *matRowDef="let row; columns: ${tableIdAsPropertyName}DisplayedColumns;"></tr>`;

    codeHtml += `<mat-card>`;
    if (table.title)
      codeHtml += `<mat-card-title>${table.title}</mat-card-title>`;
    if (table.subtitle)
      codeHtml += `<mat-card-subtitle>${table.subtitle}</mat-card-subtitle>`;
    codeHtml += codeTableForm;
    codeHtml += `<table mat-table [dataSource]="${tableIdAsPropertyName}DataSource" class="mat-elevation-z8">`;
    codeHtml += codeTable;
    codeHtml += `</table>`;
    codeHtml += `</mat-card>`;
    codeHtml += rowMenu;

    return codeHtml;
  };

  setTableDirective = (table: TableInterface) => {
    //         let codeTypescript = '',
    //             codeConstructor = 'constructor(',
    //             codeDialogImport: string = '',
    //             codeTable = '',
    //             codeTableForm = '',
    //             codeAction = '',
    //             array,
    //             tableIdAsPropertyName: string,
    //             tableIdAsClassName,
    //             hasDialog: boolean = false;
    //         tableArray.forEach((table: Table) => {
    //             hasDialog = false,
    //             codeDialogImport = '',
    //             codeTable = '',
    //             codeTableForm = '',
    //             array = table.elements,
    //             tableIdAsPropertyName = this.sharedFunctions.setIdToPropertyName(table.id),
    //             tableIdAsClassName = this.sharedFunctions.setIdToClassName(table.id);
    //             /**
    //              * Form over table
    //              */
    //             if (table.actions) {
    //                 codeTableForm += this.form.setFormDirective([table.actions], true);
    //             }
    //             if (table.data.type === 'API') {
    //                 codeAction += `${tableIdAsPropertyName}Table = () => {fetch('${table.data.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
    //             }
    //             codeTable += `${tableIdAsPropertyName}DataSource =`;
    //             codeTable += table.object ? `${JSON.stringify(table.object)};` : `this.${tableIdAsPropertyName}Table();`;
    //             codeTable += `${tableIdAsPropertyName}DisplayedColumns: string[] = [`;
    //             array.forEach((element: TableElement) => {
    //                 codeTable += `'${element.row.field}',`;
    //             });
    //             codeTable += `];`;
    //             if (hasDialog) {
    //                 codeConstructor += `private ${tableIdAsPropertyName}Dialog: MatDialog`;
    //                 codeDialogImport += `import {MatDialog} from '@angular/material/dialog';`;
    //             }
    //             codeConstructor += `) {};`;
    //             codeTypescript += `import { Component } from '@angular/core';`;
    //             codeTypescript += codeDialogImport;
    //             codeTypescript += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.css']})`;
    //             codeTypescript += `export class ${tableIdAsClassName}Component {`;
    //             codeTypescript += codeConstructor.replace(/\, \)/gi, ')').replace(/\, \,/gi, '');
    //             codeTypescript += codeTable.replace(',]', ']');
    //             codeTypescript += codeTableForm.replace(',]', ']');
    //             codeTypescript += codeAction;
    //             codeTypescript += `}`;
    //         });
    //         return codeTypescript;
    //     }
    //     setTableService = (tableArray: any) => {}
    //     setTableInterface = (tableArray: any) => {
    //         // TO-DO
  };
}
