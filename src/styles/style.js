import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     text-decoration: none;
	 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

 }
 :root{
        --darkBlue: #14404D;
        --seablue: #237C95;
        --yellow: #CEB310;
        --pictonBlue : #00C3FA;
        --blue : #3D8CA2;
        --lightGreen: #60D272;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --gray: #666360;
        --red: #EC4F4F;
        --hoverBlue: #191970;
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
  width: 0;               /* width of the entire scrollbar */
  height: 0;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #0a0a0a;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}


@media (min-width: 790px) {

  ::-webkit-scrollbar {
  width: 4px;               /* width of the entire scrollbar */
  height: 6px;               /* width of the entire scrollbar */
}

}




`;
export default GlobalStyles;
