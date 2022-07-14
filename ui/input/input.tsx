import * as React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
`;

type Props = {
  type?: "text" | "number" | "email" | "password";
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type = "text", ...props }: Props) => {
  return <InputElement type={type} {...props} />;
};

export default Input;
