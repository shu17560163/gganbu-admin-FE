/**
 *
 * for to lazy load component ! important
 * if need to do lazy load component,
 * Try also to understand 【startTransition】in some exterme situation.
 *
 */

import { Spin } from "antd";
import { Suspense } from "react";
import ErrorBoundary from "../pages/ErrorBoundary";

const Fallback = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center min-h-full">
        <Spin></Spin>
      </div>
    </>
  );
};
export default function SuspenseWrapper(
  LazyComponent: React.LazyExoticComponent<() => JSX.Element>
) {
  return () => (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Fallback />}>{<LazyComponent />}</Suspense>
      </ErrorBoundary>
    </>
  );
}
