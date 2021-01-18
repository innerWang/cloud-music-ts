import { makeAutoObservable } from 'mobx';
import { getBanner } from 'services';

class Recommend {
  list: APIS.IBannerList = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchBanner() {
    getBanner()
      .then(({ banners }) => {
        this.list = banners;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}

export default Recommend;
