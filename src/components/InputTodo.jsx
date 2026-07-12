const InputTodo = ({onChange, todoText, onClick}) => {
  return (
    <>
      <section className="input-area">
        <input 
          id="todo-input" 
          type="text" 
          placeholder="TODOを入力してください。" 
          value={todoText} 
          onChange={onChange}
        />
        <button 
          className="add-button" 
          onClick={onClick}>
            追加
        </button>
      </section>
    </>
  )
}

export default InputTodo
