import styled from 'styled-components';
import baseStyle from 'assets/baseStyle';

export const TopContainer = styled.div`
  display: flex;
  padding: 0 24px;
  height: 70px;
  color: ${baseStyle['color-grey']};
  border-bottom: 1px solid #000;
  background-color: ${baseStyle['dark-bg-color']};

  > .logo {
    ${baseStyle['topBarImg']()}
    width: 176px;
    height: 69px;
    background-position: 0 0;

    a {
      display: block;
      height: 100%;
      text-indent: -9999px;
    }
  }

  > .nav {
    display: flex;

    > li {
      position: relative;
      padding: 0 24px;
      height: 70px;
      line-height: 70px;

      > a {
        display: block;
        height: 100%;
      }

      &.active,
      &:hover {
        background-color: #000;
        color: #fff;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 8px);
        border: 8px solid transparent;
        border-bottom-color: ${baseStyle['theme-color']};
        //margin-left: -5px;
        display: none;
      }

      &.active::after {
        display: block;
      }
    }
  }
`;

export const ThemeMargin = styled.div`
  height: 4px;
  background-color: ${baseStyle['lighter-theme-color']};
`;

export const SubNavContainer = styled.div`
  padding: 0 0 6px 200px;
  font-size: 12px;
  color: #fff;
  background-color: ${baseStyle['theme-color']};

  > ul {
    display: none;

    > li {
      padding: 6px 32px 0;

      > a {
        padding: 2px 10px;
        height: 20px;
        line-height: 20px;
        border-radius: 20px;

        &:hover {
          background-color: #9b0909;
        }
      }

      &.active {
        a {
          background-color: #9b0909;
        }
      }
    }

    &.show {
      display: flex;
    }
  }
`;
