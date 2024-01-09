import './App.css';
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
            <RoutesApp />
            <GlobalStyle />
        </AuthProvider>
    </div>
  );
}

export default App;
