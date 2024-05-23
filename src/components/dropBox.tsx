import useFileUpload from '@/lib/hooks/useFileUpload';
import { useState, useCallback, useRef } from 'react';

type DropBoxProps = {
  title: string;
  additional?: string;
  optional?: boolean;
  acceptedFiles: { [key: string]: string[] }
};

const DropBox = (props: DropBoxProps) => {
  const { title, optional, additional, acceptedFiles } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { 
    file, 
    handleFileChange, 
    handleDrop, 
    handleDragOver, 
    clearFile
  } = useFileUpload();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  console.log(file);

  return (
    <div 
      className="w-full p-2 px-3 border-2 border-dashed border-gray-300 h-20 flex justify-center flex-col items-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input 
        type="file" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        ref={fileInputRef}
      />
      <button type="button" onClick={handleButtonClick} className="text-gray-500">{title} {optional && "*"}</button>
      {file ? (
        <p className="text-gray-500 text-sm">{file.name}</p>
      ) : (
        <div>
          {additional && <p className="text-gray-500 text-sm">{additional}</p>}
        </div>
      )}
    </div>
  );
}

export default DropBox;