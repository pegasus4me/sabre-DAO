import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";

const queryClient:QueryClient = new QueryClient();

export default function Query({children}:  {children: React.ReactNode}) : JSX.Element {

    return (
        <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>
                {children}
            </ConnectKitProvider>
        </QueryClientProvider>
    )
}