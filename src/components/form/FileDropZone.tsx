import { useDropzone } from "react-dropzone";
import FileIcon from "../ui/FileIcon";

interface FileDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export default function FileDropzone({ onDrop }: FileDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg 
        flex flex-col gap-1 p-6 items-center
        transition-colors duration-200 cursor-pointer
        ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-gray-200 hover:border-primary/50"
        }
      `}
    >
      <input {...getInputProps()} />
      <FileIcon className={`w-12 h-12 ${isDragActive ? "text-primary" : ""}`} />
      <span className="text-sm font-medium text-gray-500">
        {isDragActive
          ? "Drop your cat image here"
          : "Drag and drop a cat image file or click to browse"}
      </span>
      <span className="text-xs text-gray-500">
        Accepts JPEG, PNG, WebP (max 10MB)
      </span>
    </div>
  );
}
