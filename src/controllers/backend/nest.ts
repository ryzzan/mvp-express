import { ObjectToCode } from "../../../interfaces/frontend";
import { ArchitectureToNest } from "../backend/nest/architecture/nest-architecture";

export class CodeToNest {
    architecture = new ArchitectureToNest;
    setNestCode(objectToCode: ObjectToCode) {
        if (objectToCode.form?.service) {
            this.architecture.createProjectComponentPathAndFile({
                projectPath: `${objectToCode.projectPath}-api`,
                serviceEndPoint: objectToCode.form.service.endPoint
            })
        }

        return {
            message: 'No service provided, no backend needed. Backend feels sad! :('
        }
    }
}