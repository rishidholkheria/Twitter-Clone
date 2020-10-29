import { Widgets } from "@material-ui/icons";
import "./App.css";
import Feed from "./Feed";
import Post from "./Post";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed/>
      <Widgets />
    </div>
  );
}

export default App;
