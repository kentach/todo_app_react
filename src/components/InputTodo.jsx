const style = {
  backgroundColor: "#c6e5d9",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
};

const inputStyle = {
  borderRadius: "8px",
  width: "85%",
  border: "none",
  padding: "8px 16px",
};

const addBtnStyle = {
  borderRadius: "8px",
  border: "none",
  padding: "4px 16px",
  margin: "0 2px",
  cursor: "pointer",
};

const InputTodo = ({ onChange, todoText, onClick, disabled}) => {
  return (
    <>
      <section style={style}>
        <input
          disabled={disabled}
          style={inputStyle}
          id="todo-input"
          type="text"
          placeholder="TODOを入力してください。"
          value={todoText}
          onChange={onChange}
        />
        <button 
          style={addBtnStyle} 
          onClick={onClick}
          disabled={disabled}>
          追加
        </button>
      </section>
    </>
  );
};

export default InputTodo;
