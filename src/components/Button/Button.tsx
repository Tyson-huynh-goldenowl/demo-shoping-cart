import React from "react";
import { Button } from 'antd';
import "./button.scss";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Button
      className={["storybook-button", `storybook-button--${size}`, mode, className].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
