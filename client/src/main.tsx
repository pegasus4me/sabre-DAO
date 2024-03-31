import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// web3 configs
import Provider from "./lib/wrappers/wagmiProvider.tsx";
import Query from "./lib/wrappers/queryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Query>
        
        <App />
      </Query>
    </Provider>
  </React.StrictMode>
);
