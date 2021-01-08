import { omit } from 'utils/helper';

export const navs = [
  {
    title: '发现音乐',
    key: '/discover',
    children: [
      {
        title: '推荐',
        key: '/discover/recommend',
      },
      {
        title: '排行榜',
        key: '/discover/toplist',
      },
      {
        title: '歌手',
        key: '/discover/artist',
      },
    ],
  },
  {
    title: '我的音乐',
    key: '/mymusic',
  },
];

export interface IObj {
  [key: string]: any;
}

const subNav: Array<IObj> = [];

const mainNav = navs.map((nav) => {
  if (Array.isArray(nav.children) && nav.children.length > 0) {
    subNav.push({ key: nav.key, children: nav.children });
  }
  return omit(nav, 'children');
});

export { mainNav, subNav };
