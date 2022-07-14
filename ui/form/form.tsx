import * as React from "react";
import styled from "styled-components";

const FormElement = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  align-items: flex-start;
`;

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

const Form = ({ children, onSubmit, ...props }: Props) => {
  return (
    <FormElement
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
      {...props}
    >
      {children}
    </FormElement>
  );
};

export default Form;
