import { TextTransformation } from '../../../utils/text.transformation';
import { Directive as IDirective } from './directives/directives.interface';

export class Directive {
  projectName = '';
  customDirective: IDirective;

  constructor(customDirective: IDirective) {
    this.customDirective = customDirective;
  }

  setComponentSkeleton(projectName: string): string {
    let componentSkeleton = `
      import { Component, OnInit } from '@angular/core';
      %IMPORTS%

      @Component({
        selector: 'app-%kebabfy(${projectName})%',
        templateUrl: './%kebabfy(${projectName})%.component.html',
        styleUrls: ['./%kebabfy(${projectName})%.component.sass']
      })
      export class %pascalfy(${projectName})%Component implements OnInit {

        %VARIABLES%

        constructor(%DEPENDENCIES%) {
          %CONSTRUCTOR_CODE%
        }

        ngOnInit(): void {
        }

        %ACTIONS%
      }
    `;
    componentSkeleton =
      this.replaceTextTransformationToString(componentSkeleton);
    return componentSkeleton;
  }

  private replaceTextTransformationToString(template: string): string {
    template = this.customDirective.injectImports(template);
    template = this.customDirective.injectVariables(template);
    template = this.customDirective.injectDependencies(template);
    template = this.customDirective.injectConstructor(template);
    template = this.customDirective.injectActions(template);
    template = TextTransformation.replaceKebabfyFunctionToString(template);
    template = TextTransformation.replacePascalfyFunctionToString(template);

    return template;
  }
}
