import { createGlobalStyle } from "styled-components";
import { document } from "./document";
import { reset } from "./reset";
import { vars } from "./vars";

export const GlobalCSS = createGlobalStyle`
    ${reset};
    ${vars};
    ${document};
`;
