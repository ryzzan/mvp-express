import { ButtonInterface, FormInterface, InputInterface, OptgroupInterface, OptionInterface, SelectInterface } from "../../../../../interfaces/frontend";
import { FormAngular } from "../form";
export declare class FormTemplate {
    formTemplate: FormAngular;
    setInput: (input: InputInterface) => string;
    setSelect: (select: SelectInterface) => string;
    setOptgroup: (optgroup: OptgroupInterface) => void;
    setOptions: (options: OptionInterface) => void;
    setSlide: (slide: InputInterface) => string;
    setButton: (button: ButtonInterface) => void;
    setTab: (tabs: Array<FormInterface>) => void;
}
