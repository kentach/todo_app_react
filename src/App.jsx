import './App.css'

function App() {

  return (
    <>
    <section class="input-area">
      <input id="todo-input" type="text" placeholder="TODOを入力してください。"/>
      <button id="add-button">追加</button>
    </section>

    <section class="incomplete-area">
      <p class="todo-title">未完了のTODO</p>
      <ul id="incomplete-list">
        <li>
          <div className="todo-list">
            <p>Todoアイテム</p>
            <button className="button-style">削除</button>
            <button className="button-style">完了</button>
          </div>
        </li>
      </ul>
    </section>

    <section class="complete-area bg-color">
      <p class="todo-title">完了のTODO</p>
      <ul id="complete-list">
        <li>
          <div className="todo-list">
            <p>Todoアイテム</p>
            <button className="button-style">戻す</button>
          </div>
        </li>
      </ul>
    </section>
    
    </>
  )
}

export default App
