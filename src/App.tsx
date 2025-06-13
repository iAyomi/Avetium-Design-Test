import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
// import DemoRequest from "./pages/DemoRequest";
import "./App.css";
import "./tailwind.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      {/* <DemoRequest /> */}
    </div>
  );
}

export default App;
