import { lazy, Suspense } from "react";
import { CircularProgress } from "../../common";

const LazyComet = lazy(() => import("./Comet"));

export const Comet = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyComet {...props} />
  </Suspense>
);
