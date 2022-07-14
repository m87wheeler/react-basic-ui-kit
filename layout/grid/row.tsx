import * as React from "react";
import styled from "styled-components";

export const RowContainer = styled.div<{ gap: number }>`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ gap }) => `${gap * 0.25}rem`};
`;

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  gap?: number;
}

const Row = ({ children, as, gap = 0, ...props }: Props) => {
  return (
    <RowContainer as={as} gap={gap} {...props}>
      {children}
    </RowContainer>
  );
};

export default Row;
