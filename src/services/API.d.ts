// typescript 默认会把 d.ts 结尾的文件导入到全局，如果需要引入外部文件，则需要使用三斜杠语法

namespace APIS {
  interface IBaseRes {
    code?: number;
  }

  export interface IBannerItem {
    imageUrl: string;
    typeTitle: string;
    encodeId: string;
    targetId: number;
  }

  export type IBannerList = Array<IBannerItem>;

  export interface IBannerRequest extends IBaseRes {
    banners: IBannerList;
  }
}
