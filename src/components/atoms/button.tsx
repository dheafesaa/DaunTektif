import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface CustomButtonProps extends MuiButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <MuiButton
      variant="contained"
      color="secondary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        borderRadius: 50,
        px: 4,
        py: 1.2,
        color: "white",
        fontWeight: 600,
        ...props.sx,
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default CustomButton;
