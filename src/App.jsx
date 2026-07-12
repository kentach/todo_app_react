import './App.css'
import { useState } from 'react';
import InputTodo from './components/InputTodo';
import IncompleteTodoList from './components/IncompleteTodoList';
import CompleteTodoList from './components/CompleteTodoList';

function App() {
  const [todoText, setTodoText] = useState("") // 入力された値を管理する

  const [incompleteTodos, setIncompleteTodos] = useState([
      { 
        id: 1,
        title: "Todoアイテム1" 
      }, 
      {
        id: 2,
        title: "Todoアイテム2"
      }
    ]);

  const [completeTodos, setCompleteTodos] = useState([
      { 
        id: 3,
        title: "Todoアイテム1" 
      }, 
      {
        id: 4,
        title: "Todoアイテム2"
      }
    ]);

    const onChangeTodoText = (e) => {
      setTodoText(e.target.value)
    }

    const onClickAdd = () => {
      if (todoText === "") return;

      const newTodo = { // オブジェクトの配列であるため、合わせる必要がある
        id: incompleteTodos.length + 1,
        title: todoText,
      };

      const newTodos = [...incompleteTodos, newTodo]; // [スプレッド構文で展開, 追加したい要素]
      setIncompleteTodos(newTodos);
      setTodoText("")
    }

    // 未完了側の削除ボタン
    const onClickDelete = (index) => {
      if(!confirm("Sure?")) return;
      const newTodos = [...incompleteTodos];
      // spliceメソッドの引数（何番目にある、いくつ削除するか）
      newTodos.splice(index, 1);
      setIncompleteTodos(newTodos);
    }

    // 未完了側の完了ボタン
    const onClickComplete = (index) => {
      const newIncompleteTodos = [...incompleteTodos]; // 未完了のTodoリストを新しく作成
      newIncompleteTodos.splice(index, 1); // 未完了のTodoリストから、押されたTodoアイテムのindexを一つ削除する
      setIncompleteTodos(newIncompleteTodos); // 関数で更新する。
      const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; // 完了のTodoリストを新しく作成して、
                                                                          // 未完了のTodoリストから押されたindexを追加する
      setCompleteTodos(newCompleteTodos); // 関数で更新する。
    }

    // 完了側の戻すボタン
    const onClickBackToComplete = (index) => {
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index, 1);
      setCompleteTodos(newCompleteTodos);

      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      setIncompleteTodos(newIncompleteTodos);
    }
  
  return (
    <>
    <InputTodo 
      onClick={onClickAdd} 
      todoText={todoText} 
      onChange={onChangeTodoText} 
    /> 
    <IncompleteTodoList 
      todos={incompleteTodos} 
      onClickDelete={onClickDelete} 
      onClickComplete={onClickComplete} 
    />
    <CompleteTodoList 
      todos={completeTodos} 
      onClickBackToComplete={onClickBackToComplete}
    />
  </>
  )
}

export default App
