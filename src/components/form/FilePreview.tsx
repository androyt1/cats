interface FilePreviewProps {
  file: File;
  preview: string;
}

export default function FilePreview({ file, preview }: FilePreviewProps) {
  return (
    <div className="mt-4 space-y-2">
      <img
        src={preview}
        alt="Preview"
        className="w-full h-48 object-cover rounded-lg"
      />
      <p className="text-sm text-gray-500">
        {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
      </p>
    </div>
  );
}
