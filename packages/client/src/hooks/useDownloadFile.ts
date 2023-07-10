export default function useDownloadFile() {
  const saveFile = (blob: Blob, filename: string) => {
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // link.download = filename;
    // link.click();

    const link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    saveFile,
  };
}
