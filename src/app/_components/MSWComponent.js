"use client";

import { Suspense, use } from "react";
import { handlers } from "@/mocks/handlers";

const mockingEnabledPromise =
  typeof window !== "undefined"
    ? import("@/mocks/browser").then(async ({ default: worker }) => {
        if (process.env.NODE_ENV === "production") {
          return;
        }

        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes("_next")) {
              return;
            }
            print.warning();
          },
        });

        worker.use(...handlers);

        if (typeof module !== "undefined" && module.hot) {
          module.hot.dispose(() => {
            worker.stop();
          });
        }

        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({ children }) {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({ children }) {
  use(mockingEnabledPromise);
  return children;
}
