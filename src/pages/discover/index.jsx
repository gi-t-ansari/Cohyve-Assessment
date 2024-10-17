import { lazy, Suspense } from "react";
import { CircularProgress } from "../../common";

const LazyDiscover = lazy(() => import("./Discover"));

export const Discover = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyDiscover {...props} />
  </Suspense>
);
