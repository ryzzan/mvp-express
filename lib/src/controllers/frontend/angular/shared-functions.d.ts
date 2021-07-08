export declare class SharedFunctions {
    setIdToPropertyName: (id: string) => string;
    setIdToClassName: (id: string) => string;
    /**
     * @todo Set alternative attributes to substitute the original ones
     * @param objectOriginal
     * @param attributesToUseFromObjectOriginal
     * @param alternativeAttributesOnNewObject
     * @param isArray
     * @returns
     */
    objectTransform: (objectOriginal: Array<Object>, attributesToUseFromObjectOriginal: Array<string>, alternativeAttributesOnNewObject: Array<string>, isArray?: boolean | undefined) => string;
    /**
     *
     * @param objectOriginal
     * @returns
     */
    objectToString: (objectOriginal: any) => string;
}
