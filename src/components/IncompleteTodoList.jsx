const IncompleteTodoList = ({todos, onClickDelete, onClickComplete}) => {
  return (
    <>
    <section className="incomplete-area">
      <p className="todo-title">未完了のTODO</p>
      <ul id="incomplete-list">

        { //何番目のアイテムか分かれば、配列から削除できるので、indexを引数として受け取る。
          todos.map((todo, index) => (
          <li key={todo.id}>
            <div className="todo-list">
              <p>{todo.title}</p>
              <button 
                onClick={() => onClickDelete(index)} 
                className="button-style">
                  削除
              </button>
              <button 
                onClick={() => onClickComplete(index)} 
                className="button-style">
                  完了
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

export default IncompleteTodoList
