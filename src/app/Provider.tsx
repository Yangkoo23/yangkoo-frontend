"use client";
import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <>
      <ClerkProvider afterSignOutUrl="/home">
        <ClerkLoaded>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
