"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeAngular = void 0;
var frontend_1 = require("../../../../interfaces/frontend");
var shared_functions_1 = require("./shared-functions");
var TreeAngular = /** @class */ (function () {
    function TreeAngular() {
        var _this = this;
        this.shared = new shared_functions_1.SharedFunctions;
        this.setTreeHtml = function (treeArray, nested) {
            var codeHtml = '', nodeMenu = '';
            treeArray.forEach(function (tree) {
                var codeTree = '', array = tree.elements, treeIdAsPropertyName = _this.shared.idToPropertyName(tree.id), treeIdAsClassName = _this.shared.idToClassName(tree.id);
                codeTree += _this.setTreeHtmlElement(array, treeIdAsPropertyName, treeIdAsClassName);
                codeHtml += "<mat-tree [dataSource]=\"" + treeIdAsPropertyName + "DataSource\" [treeControl]=\"" + treeIdAsClassName + "TreeControl\">";
                codeHtml += codeTree;
                codeHtml += "</mat-tree>";
                codeHtml += nodeMenu;
            });
            return codeHtml;
        };
        this.setTreeHtmlElement = function (elements, treeIdAsPropertyName, treeIdAsClassName, nested) {
            var codeTree = '', nodeMenu = '';
            elements.forEach(function (element) {
                var nodeElement = '';
                // if (element.node.type !== 'menu') nodeElement = `{{element.${element.node.field}}}`;
                // if (element.node.type === 'menu') {
                //     /** Trigger to menu */
                //     nodeElement += `<button mat-icon-button class="icon" aria-label="${treeIdAsClassName}" [matMenuTriggerFor]="${treeIdAsPropertyName}Menu">`;
                //     nodeElement += `<mat-icon>${element.node.icon}</mat-icon>`;
                //     nodeElement += `</button>`;
                //     /** Menu itself */
                //     nodeMenu += `<mat-menu #${treeIdAsPropertyName}Menu="matMenu">`;
                //     element.node.menu?.forEach((menuItem) => {
                //         nodeMenu += `<button mat-menu-item>`;
                //         nodeMenu += menuItem.icon ? `<mat-icon>${menuItem.icon}</mat-icon>` : '';
                //         nodeMenu += `<span>${menuItem.label}</span>`;
                //         nodeMenu += `</button>`;
                //     })
                //     nodeMenu += `</mat-menu>`;
                // }
                // if (!nested) {
                codeTree += "<mat-tree-node *matTreeNodeDef=\"let " + treeIdAsPropertyName + "Node\" matTreeNodeToggle>";
                codeTree += "{{" + treeIdAsPropertyName + "Node.name}}";
                codeTree += "</mat-tree-node>";
                // }
                // if (nested) {
                codeTree += "<mat-nested-tree-node *matTreeNodeDef=\"let " + treeIdAsPropertyName + "Node; when: hasChild\">";
                codeTree += "<div class=\"mat-tree-node\">";
                codeTree += "<button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'Toggle ' + " + treeIdAsPropertyName + "Node.name\">";
                codeTree += "<mat-icon class=\"mat-icon-rtl-mirror\">";
                codeTree += "{{" + treeIdAsPropertyName + "Node.name}}";
                codeTree += "</mat-icon>";
                codeTree += "</button>";
                codeTree += "</div>";
                codeTree += "<div [class.tree-invisible]=\"!" + treeIdAsPropertyName + "TreeControl.isExpanded(" + treeIdAsPropertyName + "Node)\" role=\"group\">";
                codeTree += "<ng-container matTreeNodeOutlet></ng-container>";
                codeTree += "</div>";
                codeTree += "</mat-nested-tree-node>";
                // }
            });
            return codeTree;
        };
        this.setTreeDirective = function (treeArray) {
            var codeTypescript = '', codeTree = '', codeConstructor = '', treeObject = '', codeAction = '', array, treeIdAsPropertyName, treeIdAsClassName;
            treeArray.forEach(function (tree) {
                codeTree = '',
                    codeConstructor = 'constructor(';
                treeObject = '',
                    array = tree.elements,
                    treeIdAsPropertyName = _this.shared.idToPropertyName(tree.id),
                    treeIdAsClassName = _this.shared.idToClassName(tree.id);
                // if (tree.action.type === 'api') {
                //     codeAction += `${treeIdAsPropertyName}Tree = () => {fetch('${tree.action.url}', {method: 'GET',headers: {'Content-type': 'application/json','Access-Control-Allow-Origin': '*',},}).then((data) => {data.json().then((keys) => {return keys;})});}`;
                // }
                array.forEach(function (element) {
                    if (element.nodes.type === frontend_1.RequestTypeEnum.Object) {
                        treeObject += element.nodes.object;
                    }
                });
                codeTree += treeIdAsPropertyName + "TreeControl = new NestedTreeControl<" + treeIdAsPropertyName + "Node>(node => node.children);";
                codeTree += treeIdAsPropertyName + "DataSource = new MatTreeNestedDataSource<" + treeIdAsClassName + "Node>();";
                codeConstructor += ") {";
                codeConstructor += "this." + treeIdAsPropertyName + "}DataSource.data = " + treeObject;
                codeConstructor += "}";
                codeTypescript += "import { Component } from '@angular/core'; import {NestedTreeControl} from '@angular/cdk/tree'; import {MatTreeNestedDataSource} from '@angular/material/tree';";
                codeTypescript += "interface " + treeIdAsClassName + "Node {name: string, children?: " + treeIdAsClassName + "Node[];}";
                codeTypescript += "" + treeObject;
                codeTypescript += "@Component({selector: 'app-" + tree.id + "', templateUrl: './" + tree.id + ".component.html', styleUrls: ['./" + tree.id + ".component.css']})";
                codeTypescript += "export class " + treeIdAsClassName + "Component {";
                codeTypescript += codeConstructor;
                codeTypescript += codeTree.replace(',]', ']');
                codeTypescript += codeAction;
                codeTypescript += "}";
            });
            return codeTypescript;
        };
        this.setTreeService = function (formArray) {
        };
        this.setTreeInterface = function (formArray) {
            // TO-DO
        };
    }
    return TreeAngular;
}());
exports.TreeAngular = TreeAngular;
