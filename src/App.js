import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase'
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here ... fires when the app.js loads
    db.collecion('todos')
  }, []);

  const addTodo = (event) => {
    // this will fire off when we clik the button
    event.preventDefault(); // will stop the refresh       //如果此事件没有被显式处理，它默认的动作也不应该照常执行。此事件还是继续传播，除非碰到事件侦听器调用 stopPropagation() 或stopImmediatePropagation()，才停止传播
    console.log("alient", ", I am working");
    console.log(todos);
    setTodos([...todos, input]); // [...todo,input] 第一个参数为已存在数组,但不确定长度的数组(个数), 第二个为添加的数组对象
    setInput(""); // clear up the input after hitting sbumit add todo button
  };
  return (
    <div className="App">
      <h1>hello world</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              return setInput(event.target.value);
            }}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {" "}
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}{" "}
      </ul>
    </div>
  );
}

export default App;
