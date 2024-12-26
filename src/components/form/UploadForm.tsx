import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { uploadCat } from "@/api/catApi";
import { AxiosError } from "axios";
import FileDropzone from "./FileDropZone";
import FilePreview from "./FilePreview";
import ErrorAlert from "./ErrorAlert";
import UploadButton from "./UploadButton";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const uploadMutation = useMutation({
    mutationFn: (file: File) => uploadCat(file),
    onSuccess: () => {
      setError(null);
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data) {
        setError(error.response.data || "Failed to upload image");
      } else {
        setError("An unexpected error occurred");
      }
    },
  });

  const validateFile = (file: File): string | null => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      return "Please upload a JPEG, PNG, or WebP image file.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 10MB.";
    }
    return null;
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const droppedFile = acceptedFiles[0];
    if (droppedFile) {
      const validationError = validateFile(droppedFile);
      if (validationError) {
        setError(validationError);
        return;
      }
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(droppedFile);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      uploadMutation.mutate(file);
    }
  };

  return (
    <Card className="max-w-md w-full">
      <form onSubmit={handleSubmit} noValidate>
        <CardContent className="p-6 space-y-4">
          {error && <ErrorAlert message={error} />}
          <FileDropzone onDrop={onDrop} />
          {file && preview && <FilePreview file={file} preview={preview} />}
        </CardContent>
        <CardFooter>
          <UploadButton
            file={file}
            isPending={uploadMutation.isPending}
            error={error}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default UploadForm;
