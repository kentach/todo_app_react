const CompleteTodoList = ({ todos, onClickBackToComplete}) => {
  return (
    <>
    <section className="complete-area bg-color">
      <p className="todo-title">完了のTODO</p>
      <ul id="complete-list">
      {
        todos.map((todo, index) => (
        <li key={todo.id}>
          <div className="todo-list">
            <p>{todo.title}</p>
            <button onClick={() => onClickBackToComplete(index)} 
                    className="button-style">
              戻す
            </button>
          </div>
        </li>
        ))
      }
      </ul>
    </section>
    
    </>
  )
}

export default CompleteTodoList
