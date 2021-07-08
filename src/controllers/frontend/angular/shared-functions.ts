export class SharedFunctions {
    setIdToPropertyName = (id: string) => {
        let propertyName = '';
        const array = id.split('-');
        propertyName += array[0];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (i > 0) propertyName += element.charAt(0).toUpperCase() + element.slice(1);
        }

        return propertyName;
    }

    setIdToClassName = (id: string) => {
        let className = '';
        const array = id.split('-');
        className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (i > 0) className += element.charAt(0).toUpperCase() + element.slice(1);
        }

        return className;
    }

    /**
     * @todo Set alternative attributes to substitute the original ones
     * @param objectOriginal 
     * @param attributesToUseFromObjectOriginal 
     * @param alternativeAttributesOnNewObject 
     * @param isArray 
     * @returns 
     */
    objectTransform = (objectOriginal: Array < Object > , attributesToUseFromObjectOriginal: Array < string > , alternativeAttributesOnNewObject: Array < string > , isArray ? : boolean) => {
        let newObject = isArray ? '' : '[';
        objectOriginal.forEach(
            (objectBeingChecked: any) => {
                newObject += `{`;
                for (let i = 0; i < attributesToUseFromObjectOriginal.length; i++) {
                    const attributeBeingChecked = attributesToUseFromObjectOriginal[i];

                    if (Array.isArray(objectBeingChecked[attributeBeingChecked])) {
                        newObject += `${attributeBeingChecked}: [`;
                        newObject += this.objectTransform(objectBeingChecked[attributeBeingChecked], attributesToUseFromObjectOriginal, alternativeAttributesOnNewObject, true);
                        newObject += `]`;
                    }
                    if (objectBeingChecked[attributeBeingChecked] && !Array.isArray(objectBeingChecked[attributeBeingChecked])) {
                        newObject += `${attributeBeingChecked}: '${objectBeingChecked[attributeBeingChecked]}',`;
                    }
                }
                newObject += `},`;
            }
        )
        newObject += isArray ? '' : ']';

        return newObject.replace(/\,\]/gi, ']').replace(/\,\}/gi, '}').replace(/\,\,/gi, '');
    }

    /**
     * 
     * @param objectOriginal 
     * @returns 
     */
    objectToString = (objectOriginal: any) => {
        let string = Array.isArray(objectOriginal) ? '[' : '';
        if (Array.isArray(objectOriginal)) {
            objectOriginal.forEach(
                (object: any) => {
                    string += `{`
                    for (const key in object) {
                        if (Object.prototype.hasOwnProperty.call(object, key)) {
                            const element = object[key];
                            string += `${key}: ${element},`;
                            if (Array.isArray(element)) {
                                string += Array.isArray(element) ? `[` : '';
                                string += this.objectToString(element);
                                string += Array.isArray(element) ? `]` : '';
                            }
                        }
                    }
                    string += `}`;
                }
            )
        }

        if (!Array.isArray(objectOriginal)) {
            string += `{`
                    for (const key in objectOriginal) {
                    if (Object.prototype.hasOwnProperty.call(objectOriginal, key)) {
                        const element = objectOriginal[key];
                        string += `${key}: ${element},`;
                        if (Array.isArray(element)) {
                            string += Array.isArray(element) ? `[` : '';
                            string += this.objectToString(element);
                            string += Array.isArray(element) ? `]` : '';
                        }
                    }
                }
                string += `}`;
        }

        string += Array.isArray(objectOriginal) ? ']' : ''; 
        return string;
    }
}