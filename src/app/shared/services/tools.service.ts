import { Injectable } from '@angular/core';

@Injectable()
export class ToolsService {
  objectToKeyValuePair(obj: any) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  }

  classToFormData(obj: any): FormData {
    const formData = new FormData();
    const keyValues = this.objectToKeyValuePair(obj);

    keyValues.forEach((i) => {
      if (i[1] instanceof Array && i[1][0] instanceof File) {
        i[1].forEach((file: File) => formData.append(i[0], file, file.name));
      } else {
        formData.append(i[0], i[1]);
      }
    });

    return formData;
  }
}
