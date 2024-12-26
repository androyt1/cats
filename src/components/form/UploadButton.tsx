import { Button } from "@/components/ui/button";

interface UploadButtonProps {
  file: File | null;
  isPending: boolean;
  error: string | null;
}

const UploadButton = ({ file, isPending, error }: UploadButtonProps) => {
  return (
    <Button
      size="lg"
      type="submit"
      disabled={!file || isPending || !!error}
      className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {isPending ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Uploading...
        </div>
      ) : (
        "Upload"
      )}
    </Button>
  );
};

export default UploadButton;
