/**
 *  mobx6 默认开启严格模式，对应会强制 enforceActions，即所有的事件处理函数需要被 action 所包裹
 */

import { makeAutoObservable, flow } from 'mobx';
import { getBanner } from 'services';

class Recommend {
  list: APIS.IBannerList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchBanner = flow(function* (this: Recommend) {
    try {
      const { banners } = yield getBanner();
      this.list = banners;
    } catch (e) {
      console.error(e.message);
    }
  });
}

export default Recommend;
