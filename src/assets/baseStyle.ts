import topBg from 'assets/images/topbar.png';

// 扩大可点击区域
const extendClick = () => {
  return `
    position: relative;
    &::after {
      content: '',
      position: absolute,
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px;
    }
  `;
};

const singleLineOmission = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};

const centeredBg = () => {
  return `
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  `;
};

const topBarImg = () => {
  return `
    background: url(${topBg}) no-repeat 0 9999px;
  `;
};

export default {
  'theme-color': '#C01119',
  'lighter-theme-color': '#c20c0c',
  'dark-bg-color': '#242424',
  'color-grey': '#c5c5c5',
  extendClick,
  singleLineOmission,
  centeredBg,
  topBarImg,
};
