// buffer-utils.ts

export function bufferToBase64(bufferObject: { type: string, data: number[] }): string {
    const binaryString = bufferObject.data.map(byte => String.fromCharCode(byte)).join('');
    return `data:${bufferObject.type};base64,${btoa(binaryString)}`;
  }
  