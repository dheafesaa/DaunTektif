import React, { useRef, useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../atoms/button";
import Loader from "../atoms/loader";

interface UploadImagePredictProps {
  onPredict: (file: File) => void;
  loading?: boolean;
}

const UploadImagePredict: React.FC<UploadImagePredictProps> = ({
  onPredict,
  loading,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Drag & Drop Handler
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  // File input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Click Browse
  const handleBrowse = (e: React.MouseEvent) => {
    e.stopPropagation();
    inputRef.current?.click();
  };

  // Click Prediksi
  const handlePredict = () => {
    if (selectedFile) onPredict(selectedFile);
  };

  return (
    <Stack width="100%" maxWidth={800}>
      <Box
        sx={{
          border: "1px dashed #00393B",
          borderRadius: 3,
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
          position: "relative",
          overflow: "hidden",
          cursor: "default",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {preview ? (
          <Box
            position="relative"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
            height={250}
            mx="auto"
          >
            <Box
              component="img"
              src={preview}
              alt="Preview"
              sx={{
                width: "auto",
                maxWidth: "100%",
                maxHeight: 250,
                objectFit: "contain",
                borderRadius: 2,
                display: "block",
              }}
            />
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFile(null);
                setPreview(null);
              }}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "#fff",
                ":hover": { bgcolor: "#eee" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Box textAlign="center" p={2}>
            <CloudUploadIcon sx={{ fontSize: 48 }} />
            <Typography variant="body2" fontWeight={600}>
              Drag &amp; Drop to upload <br /> or
            </Typography>
            <Typography
              variant="body2"
              fontWeight={600}
              color="secondary"
              sx={{
                cursor: "pointer",
                display: "inline-block",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={handleBrowse}
            >
              Browse Image
            </Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <CustomButton
          label="Prediksi"
          onClick={handlePredict}
          disabled={!selectedFile}
        />
      </Box>
      {loading && <Loader />}
    </Stack>
  );
};

export default UploadImagePredict;
