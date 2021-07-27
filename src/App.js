import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="d-flex">
        <div className="col-md-2 p-0">
          <Sidebar  />
        </div>
        <div className="col-md-10 p-0">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
