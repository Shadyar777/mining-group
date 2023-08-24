async function base64ToFile(dataURI: string, fileName: string): Promise<File> {
  if (!dataURI) {
    return new File([], 'empty.pdf');
  }

  const byteString = atob(dataURI.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
  return new File([blob], fileName);
}

export { base64ToFile };

// async function base64ToFile(
//     dataURI: string | null,
//     fileName: string,
// ): Promise<File> {
//   // Если dataURI равен null, устанавливаем его как пустую строку
//   const actualDataURI = dataURI || 'data:;base64,'; // Здесь используется пустая строка в формате base64
//
//   const byteString = atob(actualDataURI.split(',')[1]);
//   const arrayBuffer = new ArrayBuffer(byteString.length);
//   const intArray = new Uint8Array(arrayBuffer);
//
//   for (let i = 0; i < byteString.length; i++) {
//     intArray[i] = byteString.charCodeAt(i);
//   }
//
//   const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
//   return new File([blob], fileName);
// }
//
// export { base64ToFile };
