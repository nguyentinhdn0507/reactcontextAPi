import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { UserContextProvider } from "./context/userContext";
import Auth from "./components/Auth";
function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header></Header>
        <Auth></Auth>
      </UserContextProvider>
    </div>
  );
}

export default App;
