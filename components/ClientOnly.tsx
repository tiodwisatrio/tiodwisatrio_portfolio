"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

const ClientOnlyWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Create a client-only version of any component
const withClientOnly = <P extends object>(Component: ComponentType<P>) => {
  return dynamic(() => Promise.resolve(Component), {
    ssr: false,
    loading: () => (
      <div className="min-h-[200px] flex items-center justify-center">
        Loading...
      </div>
    ),
  });
};

export { ClientOnlyWrapper, withClientOnly };
