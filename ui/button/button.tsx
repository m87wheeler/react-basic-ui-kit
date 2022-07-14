import * as React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  return <ButtonElement {...props}>{children}</ButtonElement>;
};

export default Button;
