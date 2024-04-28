import "./App.css";
import Itembody from "./Components/ItemBody/Itembody";
import Navbar from "./Components/Navbar/Navbar";
import Mypagination from "./Components/Pagination/Mypagination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Itembody />
      <Mypagination />
    </div>
  );
}

export default App;
