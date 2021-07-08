import { DialogInterface } from "../../../../../interfaces/frontend";
import { SharedFunctions } from "../shared-functions";

export class TableDirective {
    sharedFunction = new SharedFunctions;

    setDialog = (dialog: DialogInterface) => {
        const tableIdAsPropertyName = this.sharedFunction.setIdToPropertyName(dialog.id),
        tableIdAsClassName = this.sharedFunction.setIdToClassName(dialog.id);
        let codeAction = `${tableIdAsPropertyName}OpenDialog = () => {`;
        codeAction += `const ${tableIdAsPropertyName}DialogRef = this.${tableIdAsPropertyName}Dialog.open(${dialog.templateFolder}),{`;
        if (dialog.dialogDataInterface) {
            codeAction += `,data:`;
            codeAction += this.sharedFunction.objectToString(dialog.dialogDataInterface);
        }
        codeAction += `})`;
        codeAction += `};`;
    }
}