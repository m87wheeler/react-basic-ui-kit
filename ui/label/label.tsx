import * as React from "react";
import styled from "styled-components";

const LabelElement = styled.label`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
  align-items: flex-start;
`;

type Props = {
  label: string;
  required?: boolean;
  component: React.ReactNode;
};

const Label = ({ component, label, required, ...props }: Props) => {
  return (
    <LabelElement {...props}>
      <span>
        {label}
        {required ? "*" : ""}
      </span>
      {component}
    </LabelElement>
  );
};

export default Label;
