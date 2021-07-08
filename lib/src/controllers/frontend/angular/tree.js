"use strict";
// import { Tree, TreeElementInterface, TreeNodeInterface, TreeNodeObjectInterface, RequestTypeEnum } from "../../../../interfaces/frontend";
// import { SharedFunctions } from './shared-functions';
// export class TreeAngular {
//     shared = new SharedFunctions;
//     setTreeHtml = (treeArray: Tree, nested?: boolean) => {
//         let codeHtml = '', nodeMenu = '';
//         treeArray.forEach((tree: Tree) => {
//             let codeTree = '',
//                 array = tree.elements,
//                 treeIdAsPropertyName = this.shared.setIdToPropertyName(tree.id),
//                 treeIdAsClassName = this.shared.setIdToClassName(tree.id);
//             codeTree += this.setTreeHtmlElement(array, treeIdAsPropertyName, treeIdAsClassName);
//             codeHtml += `<mat-tree [dataSource]="${treeIdAsPropertyName}DataSource" [treeControl]="${treeIdAsPropertyName}TreeControl" class="example-tree">`;
//             codeHtml += codeTree;
//             codeHtml += `</mat-tree>`;
//             codeHtml += nodeMenu;
//         });
//         return codeHtml;
//     }
//     setTreeHtmlElement = (elements: Array<TreeElementInterface>, treeIdAsPropertyName: string, treeIdAsClassName: string, nested?: boolean) => {
//         let codeTree = '', nodeMenu = '';
//         elements.forEach((element: TreeElementInterface) => {
//             let nodeElement = '';
//             // if (element.node.type !== 'menu') nodeElement = `{{element.${element.node.field}}}`;
//             // if (element.node.type === 'menu') {
//             //     /** Trigger to menu */
//             //     nodeElement += `<button mat-icon-button class="icon" aria-label="${treeIdAsClassName}" [matMenuTriggerFor]="${treeIdAsPropertyName}Menu">`;
//             //     nodeElement += `<mat-icon>${element.node.icon}</mat-icon>`;
//             //     nodeElement += `</button>`;
//             //     /** Menu itself */
//             //     nodeMenu += `<mat-menu #${treeIdAsPropertyName}Menu="matMenu">`;
//             //     element.node.menu?.forEach((menuItem) => {
//             //         nodeMenu += `<button mat-menu-item>`;
//             //         nodeMenu += menuItem.icon ? `<mat-icon>${menuItem.icon}</mat-icon>` : '';
//             //         nodeMenu += `<span>${menuItem.label}</span>`;
//             //         nodeMenu += `</button>`;
//             //     })
//             //     nodeMenu += `</mat-menu>`;
//             // }
//             // if (!nested) {
//                 codeTree += `<mat-tree-node *matTreeNodeDef="let ${treeIdAsPropertyName}Node" matTreeNodeToggle>`;
//                 codeTree += `{{${treeIdAsPropertyName}Node.name}}`;
//                 codeTree += `</mat-tree-node>`;
//             // }
//             // if (nested) {
//                 codeTree += `<mat-nested-tree-node *matTreeNodeDef="let ${treeIdAsPropertyName}Node; when: ${treeIdAsPropertyName}HasChild">`;
//                 codeTree += `<div class="mat-tree-node">`;
//                 codeTree += `<button mat-icon-button matTreeNodeToggle [attr.aria-label]="'Toggle ' + ${treeIdAsPropertyName}Node.name">`;
//                 codeTree += `<mat-icon class="mat-icon-rtl-mirror">`;
//                 codeTree += `{{${treeIdAsPropertyName}TreeControl.isExpanded(${treeIdAsPropertyName}Node) ? 'expand_more' : 'chevron_right'}}`
//                 codeTree += `</mat-icon>`;
//                 codeTree += `</button>`;
//                 codeTree += `{{${treeIdAsPropertyName}Node.name}}`;
//                 codeTree += `</div>`;
//                 codeTree += `<div [class.example-tree-invisible]="!${treeIdAsPropertyName}TreeControl.isExpanded(${treeIdAsPropertyName}Node)" role="group">`;
//                 codeTree += `<ng-container matTreeNodeOutlet></ng-container>`;
//                 codeTree += `</div>`;
//                 codeTree += `</mat-nested-tree-node>`;
//             // }
//         });
//         return codeTree;
//     }
//     setTreeDirective = (treeArray: Tree) => {
//         let codeTypescript = '',
//         codeTree = '',
//         codeConstructor = '',
//         codeTreeObject = '',
//         codeAction = '',
//         array,
//         treeIdAsPropertyName: string,
//         treeIdAsClassName: string;
//         treeArray.forEach((tree: Tree) => {
//             codeTree = '',
//             codeConstructor = 'constructor(';
//             codeTreeObject = '',
//             array = tree.elements,
//             treeIdAsPropertyName = this.shared.setIdToPropertyName(tree.id),
//             treeIdAsClassName = this.shared.setIdToClassName(tree.id);
//             // if (tree.action.type === 'api') {
//             //     codeAction += `${treeIdAsPropertyName}Tree = () => {fetch('${tree.action.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
//             // }
//             array.forEach((element: TreeElementInterface) => {
//                 if (element.nodes.type === RequestTypeEnum.Object) {
//                     const objectArray = element.nodes.object as Array<TreeNodeObjectInterface>;
//                     codeTreeObject += this.shared.objectTransform(objectArray, ['name', 'children'], ['name', 'children']);
//                     console.log(codeTreeObject);
//                 }
//             });
//             codeTree += `${treeIdAsPropertyName}TreeControl = new NestedTreeControl<${treeIdAsClassName}Node>(node => node.children);`;
//             codeTree += `${treeIdAsPropertyName}DataSource = new MatTreeNestedDataSource<${treeIdAsClassName}Node>();`;
//             codeTree += `${treeIdAsPropertyName}HasChild = (_: number, ${treeIdAsClassName}Node: ${treeIdAsClassName}Node) => !!${treeIdAsClassName}Node.children && ${treeIdAsClassName}Node.children.length > 0;`;
//             codeConstructor += `) {`;
//             codeConstructor += `this.${treeIdAsPropertyName}DataSource.data = ${codeTreeObject}`;
//             codeConstructor += `}`;
//             codeTypescript += `import { Component } from '@angular/core'; import {NestedTreeControl} from '@angular/cdk/tree'; import {MatTreeNestedDataSource} from '@angular/material/tree';`;
//             codeTypescript += `interface ${treeIdAsClassName}Node {name: string, children?: ${treeIdAsClassName}Node[];}`;
//             codeTypescript += `@Component({selector: 'app-${tree.id}', templateUrl: './${tree.id}.component.html', styleUrls: ['./${tree.id}.component.css']})`;
//             codeTypescript += `export class ${treeIdAsClassName}Component {`;
//             codeTypescript += codeConstructor;
//             codeTypescript += codeTree.replace(',]', ']');
//             codeTypescript += codeAction;
//             codeTypescript += `}`;
//         });
//         return codeTypescript;
//     }
//     setTreeService = (formArray: any) => {
//     }
//     setTreeInterface = (formArray: any) => {
//         // TO-DO
//     }
// }
