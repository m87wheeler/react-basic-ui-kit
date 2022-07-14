import * as React from "react";
import styled from "styled-components";

const TextAreaElement = styled.textarea``;

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ ...props }: Props) => {
  return <TextAreaElement {...props} />;
};

export default TextArea;
