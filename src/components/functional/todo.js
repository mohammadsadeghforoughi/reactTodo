import React, { useState, useEffect } from "react";
import List from './list';



function ToDo(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [doneList, setDoneList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    input.trim().length > 0 &&
      setList([
        ...list,
        {
          id: Date.now(),
          value: input,
        },
      ]);
    setInput("");
  };


  useEffect(() => {
    console.log(doneList, "doneList");
  }, [doneList]);

  useEffect(() => {
    console.log(list, "list");
  }, [list]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evanly" }}>
        <input value={input} onChange={handleChange} type={"text"} />
        <button onClick={handleAdd} style={{ margin: "0 0.5rem" }}>
          Add
        </button>
      </div>
     <List list={list} setList={setList}  doneList={doneList} setDoneList={setDoneList} />
    </>
  );
}

export default ToDo;
