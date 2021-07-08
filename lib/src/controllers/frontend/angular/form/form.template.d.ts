import { ButtonInterface, FormInterface, InputInterface, OptgroupInterface, OptionInterface, SelectInterface } from "../../../../../interfaces/frontend";
import { SharedFunctions } from "../../angular/shared-functions";
import { FormAngular } from "../form";
export declare class FormTemplate {
    formTemplate: FormAngular;
    sharedFunctions: SharedFunctions;
    setArray: (array: FormInterface) => string;
    setInput: (input: InputInterface) => string;
    setSelect: (select: SelectInterface) => string;
    setOptgroup: (optgroup: OptgroupInterface) => void;
    setOptions: (options: OptionInterface) => void;
    setSlide: (slide: InputInterface) => string;
    setButton: (button: ButtonInterface) => string;
    setTab: (tabs: Array<FormInterface>) => string;
}
