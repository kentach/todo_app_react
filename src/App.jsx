import './App.css'
import { useState } from 'react';

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
        id: 1,
        title: "Todoアイテム1" 
      }, 
      {
        id: 2,
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

      const newTodos = [...incompleteTodos, newTodo]; //　[スプレッド構文で展開, 追加したい要素]
      setIncompleteTodos(newTodos);
      setTodoText("")
    }

    const onClickDelete = (index) => {
      const newTodos = [...incompleteTodos];
      // spliceメソッドの引数（何番目にある、いくつ削除するか）
      newTodos.splice(index, 1);
      setIncompleteTodos(newTodos);
    }
  
  return (
    <>
    <section className="input-area">
      <input id="todo-input" type="text" placeholder="TODOを入力してください。" value={todoText} onChange={onChangeTodoText}/>
      <button className="add-button" onClick={onClickAdd}>追加</button>
    </section>

    <section className="incomplete-area">
      <p className="todo-title">未完了のTODO</p>
      <ul id="incomplete-list">
        { //何番目のアイテムか分かれば、配列から削除できるので、indexを引数として受け取る。
          incompleteTodos.map((todo, index) => (
          <li key={todo.id}>
            <div className="todo-list">
              <p>{todo.title}</p>
              <button onClick={() => onClickDelete(index)}className="button-style">削除</button>
              <button className="button-style">完了</button>
            </div>
          </li>
          ))
        }
      </ul>
    </section>

    <section className="complete-area bg-color">
      <p className="todo-title">完了のTODO</p>
      <ul id="complete-list">
      {
          completeTodos.map((todo) => (
          <li key={todo.id}>
            <div className="todo-list">
              <p>{todo.title}</p>
              <button className="button-style">戻す</button>
            </div>
          </li>
          ))
        }
      </ul>
    </section>
    
    </>
  )
}

export default App
