import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
	 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

 }
 ::root{
        --darkBlue: #012340;
        --deepBlush : #dc6e82;
        --pictonBlue : #59b5e9;
        --blue : #023E73;
        --Eminence : #6b2977;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --gray: #666360;
        --red: #c53030;
 }

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

::-webkit-scrollbar {
  width: 4px;               /* width of the entire scrollbar */
  height: 6px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #0a0a0a;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}


`;
export default GlobalStyles;
