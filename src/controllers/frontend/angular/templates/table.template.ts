import {
  RequestTypeEnum,
  TableElementInterface,
  TableInterface,
} from '../../../../../interfaces/frontend';
import { TextTransformation } from '../../../../utils/text.transformation';
import { FormTemplate } from './form.template';

export class TableTemplate {
  setTableHtml(table: TableInterface): string {
    let codeHtml = '';
    let rowMenu = '';
    let codeTable = '';
    let codeTableForm = '';
    const array = table.elements;
    const tableIdAsPropertyName = TextTransformation.setIdToPropertyName(
      table.id,
    );
    const tableIdAsClassName = TextTransformation.setIdToClassName(table.id);
    const formTemplate = new FormTemplate();
    /**
     * Form over table
     */
    if (table.actions) {
      const form = table.actions;
      const formPropertyName = TextTransformation.setIdToPropertyName(form?.id);
      codeTableForm += `<mat-card>
                <mat-card-header>
                    <mat-card-subtitle>
                        Filtragem <mat-icon>search</mat-icon>
                    </mat-card-subtitle>
                </mat-card-header>
                <form id="${
                  form.id
                }" [formGroup]="${formPropertyName}Form" (ngSubmit)="${formPropertyName}Submit()">
                    ${formTemplate.setFormInputs(table.actions)}
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
              TextTransformation.setIdToPropertyName(
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
  }
}
