import { lazy, Suspense } from "react";
import { CircularProgress } from "../../common";

const LazyUpgrade = lazy(() => import("./Upgrade"));

export const Upgrade = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyUpgrade {...props} />
  </Suspense>
);
