import React from "react";
import { Box, alpha, useTheme } from "@mui/material";

interface LoaderProps {
  width?: number | string;
  height?: number | string;
  sx?: object;
}

const Loader: React.FC<LoaderProps> = ({ width = 150, height = 24, sx }) => {
  const theme = useTheme();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={2000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: alpha(theme.palette.common.black, 0.5),
      }}
    >
      <Box
        className="mui-loader-linear"
        sx={{
          width,
          height,
          borderRadius: "20px",
          color: "#007071",
          border: "2px solid #00393B",
          position: "relative",
          display: "inline-block",
          background: "#fff",
          boxShadow: 2,
          ...sx,
        }}
      >
        <Box
          className="mui-loader-bar"
          sx={{
            content: "''",
            position: "absolute",
            margin: "2px",
            inset: "0 100% 0 0",
            borderRadius: "inherit",
            background: "#007071",
            animation: "mui-l6 2s infinite",

            zIndex: 1,
          }}
        />
        <style>
          {`
          @keyframes mui-l6 {
            100% { inset:0 }
          }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default Loader;
