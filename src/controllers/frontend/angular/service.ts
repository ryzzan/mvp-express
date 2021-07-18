import {
  ServiceFunctionsEnum,
  ServiceInterface,
} from '../../../../interfaces/frontend';
import { TextTransformation } from '../../../utils/text.transformation';

interface GetMethods {
  find(baseUrl: string, endPoint: string): string;
  get(baseUrl: string, endPoint: string): string;
  save(baseUrl: string, endPoint: string): string;
  update(baseUrl: string, endPoint: string): string;
  delete(baseUrl: string, endPoint: string): string;
  softDelete(baseUrl: string, endPoint: string): string;
}

// TODO: Get interfaces
export class ServiceAngular {
  service: ServiceInterface;
  constructor(service: ServiceInterface) {
    this.service = service;
  }
  getMethods: GetMethods = {
    find: (baseUrl: string, endPoint: string): string => `
        find(id: number) {
          return this._httpClient.get(\`${baseUrl}/${endPoint}/\${id}\`).toPromise();
        }
    `,
    get: (baseUrl: string, endPoint: string): string => `
      getAll() {
        return this._httpClient.get(\`${baseUrl}/${endPoint}\`).toPromise();
      }
    `,
    save: (baseUrl: string, endPoint: string): string => `
      save(body: any) {
        return this._httpClient.post(\`${baseUrl}/${endPoint}\`, body).toPromise();
      }
    `,
    update: (baseUrl: string, endPoint: string): string => `
      update(body: any, id: number) {
        return this._httpClient.put(\`${baseUrl}/${endPoint}/\${id}\`, body).toPromise();
      }
    `,
    delete: (baseUrl: string, endPoint: string): string => `
      delete(id: number) {
        return this._httpClient.delete(\`${baseUrl}/${endPoint}/\${id}\`).toPromise();
      }
    `,
    softDelete: (baseUrl: string, endPoint: string): string => `
      delete(id: number) {
        return this._httpClient.delete(\`${baseUrl}/${endPoint}/\${id}\`).toPromise();
      }
    `,
  };

  setTemplateSkeleton(projectName: string): string {
    let serviceTemplate = `
      import { HttpClient } from '@angular/common/http';
      import { Injectable } from '@angular/core';

      @Injectable({
        providedIn: 'root',
      })
      export class %pascalfy(${projectName})%Service {
        BASE_URL = '%BASE_URL';
        constructor(private _httpClient: HttpClient) {}
        %FUNCTIONS%
      }
    `;

    const methodsTemplate = this.getMethodsTemplate(this.service.methods);
    serviceTemplate =
      TextTransformation.replacePascalfyFunctionToString(serviceTemplate);
    serviceTemplate = serviceTemplate
      .replace('%FUNCTIONS%', methodsTemplate)
      .replace('%BASE_URL', this.service.baseUrl);

    return serviceTemplate;
  }

  private getMethodsTemplate(methods: Array<ServiceFunctionsEnum>): string {
    let methodsTemplate = '';
    methods.forEach(method => {
      const methodKey = method as keyof GetMethods;
      methodsTemplate += this.getMethods[methodKey](
        this.service.baseUrl,
        this.service.endPoint,
      );
    });
    return methodsTemplate;
  }
}
