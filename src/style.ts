import { createGlobalStyle } from 'styled-components';

// 创建一个处理全局样式的组件
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    background-color: #f2f3f4;
    min-width: 982px;
  }
  ol, ul {
		list-style: none;
	}
  table {
		border-collapse: collapse;
		border-spacing: 0;
	}
  a{
		text-decoration: none;
		color: #fff;
	}
`;
