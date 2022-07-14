import * as React from "react";
import styled from "styled-components";

const CheckboxElement = styled.input``;

type Props = {
  name: string;
  checked: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ ...props }: Props) => {
  return <CheckboxElement type="checkbox" {...props} />;
};

export default Checkbox;
