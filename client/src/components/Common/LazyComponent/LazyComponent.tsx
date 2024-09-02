import { Suspense } from "react";

type LazyComponentT = React.LazyExoticComponent<() => JSX.Element>;

export default function LazyComponent(Component: LazyComponentT, loadingText = "Loading") {
  return () => {
    return (
      <Suspense fallback={<p>{loadingText}</p>}>
        <Component />
      </Suspense>
    );
  };
}
