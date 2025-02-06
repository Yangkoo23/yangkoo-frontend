import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider afterSignOutUrl="/home">
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
