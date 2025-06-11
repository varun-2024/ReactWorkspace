import "./App.css";
import Newlottery from "./components/Newlottery.jsx";
//import Todo from "./components/Todo.jsx";
//import Todolist from "./components/Todolist.jsx";

function App() {
  return (
    <>
      <Newlottery n={3} winningSum={15} />
    </>
  );
}

export default App;
