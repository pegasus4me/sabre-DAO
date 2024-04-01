import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";

const queryClient:QueryClient = new QueryClient();

export default function Query({children}:  {children: React.ReactNode}) : JSX.Element {

    return (
        <QueryClientProvider client={queryClient}>
            <ConnectKitProvider 
             theme="minimal"
             customTheme={{
                "--ck-connectbutton-background": "#433EFF",
                "--ck-connectbutton-border-radius:" :"16px",
                "--ck-connectbutton-color" : "ffffff",
                "--ck-connectbutton-box-shadow:" : "0px 0px 0px 1px #ffffff00"
                
             }}
            >
                {children}
            </ConnectKitProvider>
        </QueryClientProvider>
    )
}