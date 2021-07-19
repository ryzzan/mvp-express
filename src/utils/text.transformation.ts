export class TextTransformation {
  static pascalfy(text: string): string {
    const pascalCase = text
      .replace(/([A-Z])/g, '$1')
      .replace(/^./, function (str) {
        return str.toUpperCase();
      });

    return pascalCase;
  }

  static kebabfy(text: string): string {
    const kebabCase = text
      .split('')
      .map((letter: string, idx: number) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
          : letter;
      })
      .join('');
    return kebabCase;
  }

  static replaceKebabfyFunctionToString(template: string): string {
    const regex = /\%kebabfy(.*?)%/g;
    const foundKebabfies = template.match(regex);

    const stringsToKebakfy = foundKebabfies
      ?.join(',')
      .replace(/\%/g, '')
      .replace(/kebabfy/g, '')
      .replace(/\(|\)/g, '')
      .split(',');

    stringsToKebakfy?.forEach((stringToKebakfy, index) => {
      const kebabfy = this.kebabfy(stringToKebakfy);
      const foundKebabfy =
        (foundKebabfies?.length && foundKebabfies[index]) || '';
      template = template.replace(foundKebabfy, kebabfy);
    });

    return template;
  }

  static replacePascalfyFunctionToString(template: string): string {
    const regex = /\%pascalfy(.*?)%/g;
    const foundPascalfies = template.match(regex);

    const stringsToPascalfy = foundPascalfies
      ?.join(',')
      .replace(/\%/g, '')
      .replace(/pascalfy/g, '')
      .replace(/\(|\)/g, '')
      .split(',');

    stringsToPascalfy?.forEach((stringToPascalfy, index) => {
      const pascalfy = this.pascalfy(stringToPascalfy);
      const foundPascalfy =
        (foundPascalfies?.length && foundPascalfies[index]) || '';
      template = template.replace(foundPascalfy, pascalfy);
    });
    return template;
  }

  static setIdToPropertyName(id: string): string {
    let propertyName = '';
    const array = id.split('-');
    propertyName += array[0];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (i > 0)
        propertyName += element.charAt(0).toUpperCase() + element.slice(1);
    }

    return propertyName;
  }

  static setIdToClassName(id: string): string {
    let className = '';
    const array = id.split('-');
    className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (i > 0)
        className += element.charAt(0).toUpperCase() + element.slice(1);
    }

    return className;
  }

  static objectToString(objectOriginal: any): string {
    let string = Array.isArray(objectOriginal) ? '[' : '';
    if (Array.isArray(objectOriginal)) {
      objectOriginal.forEach((object: any) => {
        string += `{`;
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
      });
    }

    if (!Array.isArray(objectOriginal)) {
      string += `{`;
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
