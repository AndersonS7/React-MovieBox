import './App.css';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
            <RoutesApp />
        </AuthProvider>
    </div>
  );
}

export default App;
