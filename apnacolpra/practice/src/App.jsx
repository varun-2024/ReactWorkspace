import "./App.css";
import Newlottery from "./components/Newlottery.jsx";
import { sum } from "./components/helper.jsx";
//import Todo from "./components/Todo.jsx";
//import Todolist from "./components/Todolist.jsx";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Newlottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
