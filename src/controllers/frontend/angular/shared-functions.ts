export class SharedFunctions {
    idToPropertyName = (id: string) => {
        let propertyName = '';
        const array = id.split('-');
        propertyName += array[0];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (i > 0) propertyName += element.charAt(0).toUpperCase() + element.slice(1);
        }
    
        return propertyName;
    }

    idToClassName = (id: string) => {
        let className = '';
        const array = id.split('-');
        className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (i > 0) className += element.charAt(0).toUpperCase() + element.slice(1);
        }
    
        return className;
    }
}