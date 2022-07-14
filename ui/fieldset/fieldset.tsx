import * as React from "react";
import styled from "styled-components";

const FieldsetElement = styled.fieldset<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: flex-start;
  padding: 1rem;

  legend {
    padding: 0 0.5rem;
    font-weight: bold;
  }
`;

type Props = {
  columns?: number;
  legend?: string;
  children: React.ReactNode;
};

const Fieldset = ({ children, columns = 1, legend, ...props }: Props) => {
  return (
    <FieldsetElement columns={columns} {...props}>
      {legend && <legend>{legend}</legend>}
      {children}
    </FieldsetElement>
  );
};

export default Fieldset;
