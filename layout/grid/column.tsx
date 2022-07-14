import * as React from "react";
import styled from "styled-components";

export const ColumnContainer = styled.div<{ span: number }>`
  flex: ${({ span }) => span};
`;

interface Props extends React.HTMLAttributes<HTMLElement> {
  span?: number;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const Column = ({ children, as, span = 1, ...props }: Props) => {
  return (
    <ColumnContainer as={as} span={span} {...props}>
      {children}
    </ColumnContainer>
  );
};

export default Column;
