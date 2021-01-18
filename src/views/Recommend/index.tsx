import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useMobxStore } from 'store';

const Recommend = () => {
  const store = useMobxStore();

  useEffect(() => {
    store.recommend.fetchBanner();
  }, [store.recommend]);

  console.log('render ...');

  return (
    <div>
      {store.recommend.list.map((t) => (
        <div key={t.encodeId}>
          <img src={t.imageUrl} alt={t.imageUrl} />
        </div>
      ))}
    </div>
  );
};

// observer 自动实现了 memo，所以被 observer 包裹的组件不需要外层再包 React.memo
export default observer(Recommend);
