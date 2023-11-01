import { Suspense } from "react";
import { SuspenseLoaderProps } from "./SuspenseLoader.types";

function SuspenseLoader({ children }: SuspenseLoaderProps) {
  return <Suspense>{children}</Suspense>;
}
export default SuspenseLoader;
