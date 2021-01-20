import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useMobxStore } from 'store';
import Slider from 'components/Slider';

const Recommend = () => {
  const store = useMobxStore();

  useEffect(() => {
    store.recommend.fetchBanner();
  }, [store.recommend]);

  return (
    <div>
      <Slider slides={store.recommend.list} />
    </div>
  );
};

// observer 自动实现了 memo，所以被 observer 包裹的组件不需要外层再包 React.memo
export default observer(Recommend);
