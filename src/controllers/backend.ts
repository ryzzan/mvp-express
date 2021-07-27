import {
    ObjectToCode,
} from '../../interfaces/frontend';
import {
    CodeToNest
} from './backend/nest';

export class BackendCode {
    codeToNest = new CodeToNest;

    constructor() {}

    setBackendCode(object: ObjectToCode) {
        const backendFramework = object.backendFramework;

        if (backendFramework === 'NEST') return this.codeToNest.setNestCode(object);
        if (backendFramework === 'LOOPBACK') return this.codeToNest.setNestCode(object);
        if (backendFramework === 'FASTIFY') return this.codeToNest.setNestCode(object);
        if (backendFramework === 'EXPRESS') return this.codeToNest.setNestCode(object);
        if (backendFramework === 'SPRINGBOOT') return this.codeToNest.setNestCode(object);
    }
}