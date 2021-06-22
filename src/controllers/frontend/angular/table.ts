import { Table, TableElement } from "../../../../interfaces/frontend";
import { SharedFunctions } from './shared-functions';

export class TableAngular {
    shared = new SharedFunctions;
    
    setTableHtml = (tableArray: Array<Table>) => {
        let codeHtml = '', rowMenu = '';
        tableArray.forEach((table: Table) => {
            let codeTable = '',
                array = table.elements,
                tableIdAsPropertyName = this.shared.idToPropertyName(table.id),
                tableIdAsClassName = this.shared.idToClassName(table.id);
                
            array.forEach((element: TableElement) => {
                let rowElement = '';
                if (element.row.type !== 'menu') rowElement = `{{element.${element.row.field}}}`;
                if (element.row.type === 'menu') {
                    /** Trigger to menu */
                    rowElement += `<button mat-icon-button class="icon" aria-label="${tableIdAsClassName}" [matMenuTriggerFor]="${tableIdAsPropertyName}Menu">`;
                    rowElement += `<mat-icon>${element.row.icon}</mat-icon>`;
                    rowElement += `</button>`;
                    /** Menu itself */
                    rowMenu += `<mat-menu #${tableIdAsPropertyName}Menu="matMenu">`;
                    element.row.menu?.forEach((menuItem) => {
                        rowMenu += `<button mat-menu-item>`;
                        rowMenu += menuItem.icon ? `<mat-icon>${menuItem.icon}</mat-icon>` : '';
                        rowMenu += `<span>${menuItem.label}</span>`;
                        rowMenu += `</button>`;
                    })
                    rowMenu += `</mat-menu>`;

                }
                codeTable += `<ng-container matColumnDef="${element.row.field}">`;
                codeTable += `<th mat-header-cell *matHeaderCellDef> ${element.column.label} </th>`;
                codeTable += `<td mat-cell *matCellDef="let element"> ${rowElement} </td>`;
                codeTable += `</ng-container>`;
            });
    
            codeTable += `<tr mat-header-row *matHeaderRowDef="${tableIdAsPropertyName}DisplayedColumns"></tr>`;
            codeTable += `<tr mat-row *matRowDef="let row; columns: ${tableIdAsPropertyName}DisplayedColumns;"></tr>`;
    
            codeHtml += `<table mat-table [dataSource]="${tableIdAsPropertyName}DataSource" class="mat-elevation-z8">`;
            codeHtml += codeTable;
            codeHtml += `</table>`;
            codeHtml += rowMenu;
        });
        return codeHtml;
    }

    setTableDirective = (tableArray: any) => {
        let codeTypescript = '',
        codeTable = '',
        codeAction = '',
        array,
        tableIdAsPropertyName,
        tableIdAsClassName;
        
        tableArray.forEach((table: Table) => {
            codeTable = '',
            array = table.elements,
            tableIdAsPropertyName = this.shared.idToPropertyName(table.id),
            tableIdAsClassName = this.shared.idToClassName(table.id);
    
            if (table.data.type === 'API') {
                codeAction += `${tableIdAsPropertyName}Table = () => {fetch('${table.data.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
            }

            codeTable += `${tableIdAsPropertyName}DataSource = this.${tableIdAsPropertyName}Table();`;
            codeTable += `${tableIdAsPropertyName}DisplayedColumns: string[] = [`;
            array.forEach((element: TableElement) => {
                codeTable += `'${element.row.field}',`;
            });
            codeTable += `]`;
    
            codeTypescript += `import { Component } from '@angular/core';`;
            codeTypescript += `@Component({selector: 'app-${table.id}', templateUrl: './${table.id}.component.html', styleUrls: ['./${table.id}.component.css']})`;
            codeTypescript += `export class ${tableIdAsClassName}Component {`;
            codeTypescript += codeTable.replace(',]', ']');
            codeTypescript += codeAction;
            codeTypescript += `}`;
        });
    
        return codeTypescript;
    }

    setTableService = (tableArray: any) => {
    }

    setTableInterface = (tableArray: any) => {
        // TO-DO
    }
}