import { lazy, Suspense } from "react";
import { CircularProgress } from "../../common";

const LazyManifesto = lazy(() => import("./Manifesto"));

export const Manifesto = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyManifesto {...props} />
  </Suspense>
);
