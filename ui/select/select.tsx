import * as React from "react";
import styled from "styled-components";

const SelectElement = styled.select``;

type Props = {
  options: { value: string; label: string }[];
  name: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options = [], ...props }: Props) => {
  return (
    <SelectElement {...props}>
      {options.map(({ value, label }, i) => (
        <option key={i} value={value}>
          {label}
        </option>
      ))}
    </SelectElement>
  );
};

export default Select;
