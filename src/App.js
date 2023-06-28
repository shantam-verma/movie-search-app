import ErrorBoundary from "./ErrorBoundary";
import { UserAuthContextProvider } from "./hooks/useAuthContext";
import { AppProvider } from "./hooks/useContext";
import Router from "./lib/Router";

function App() {
  return (
    <ErrorBoundary>
      <UserAuthContextProvider>
        <AppProvider>
          <Router />
        </AppProvider>
      </UserAuthContextProvider>
    </ErrorBoundary>
  );
}

export default App;
