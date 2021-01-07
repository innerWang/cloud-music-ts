import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`;

interface SvgIconProps {
  type: string;
  addtionalClass?: string;
}

export const SvgIcon = ({ type, addtionalClass }: SvgIconProps) => {
  return (
    <svg className={addtionalClass ? `${addtionalClass} icon` : 'icon'}>
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  );
};
