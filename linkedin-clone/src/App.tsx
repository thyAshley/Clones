import "./App.scss";
import { Header, Sidebar, Feed, Widget } from "./components";

function App() {
  return (
    <div className="app">
      {/* Headers */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
