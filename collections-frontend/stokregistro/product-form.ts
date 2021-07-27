import { FormInputTypeEnum, FrontendFrameworkEnum, ObjectToCode } from '../../interfaces/frontend';

export const PRODUCT_FORM: ObjectToCode = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: "product",
    projectPath: "/home/ryzzan/Projects/Kunlatek/stokregistro",
    title: "Produto",
    form: {
        label: "Produto",
        elements: [{
            input: {
                label: "EAN13",
                name: "ean13Codebar",
                placeholder: "Ex.: 7891000061190",
                type: FormInputTypeEnum.Text
            }
        }, {
            input: {
                label: "Nome do produto",
                name: "name",
                placeholder: "Ex.: Nescau",
                type: FormInputTypeEnum.Text
            }
        }, {
            input: {
                label: "Peso líquido",
                name: "name",
                placeholder: "Ex.: Nescau",
                type: FormInputTypeEnum.Text
            }
        }]
    }
}