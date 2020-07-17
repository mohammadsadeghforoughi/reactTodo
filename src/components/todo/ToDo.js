import React, { useState } from "react";

function ToDo(props) {
  const [list, setList] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleCheck = (e, index) => {
    e.target.checked
      ? setDoneTasks([...doneTasks, index])
      : setDoneTasks([...doneTasks.filter((i) => i != index)]);
  };

  const handleDelete = (index) => {
    setList([...list.filter((item, itemIndex) => itemIndex != index)]);
  };

 
  return (
    <>
      <ol>
        {list.map((item, index) => {
          return (
            <li>
              {item}{" "}
              <input
                onChange={(e) => {
                  handleCheck(e, index);
                }}
                checked={doneTasks.includes(index)}
                type="checkbox"
              />
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
      <div style={{ display: "flex", justifyContent: "space-evanly" }}>
        <input value={input} onChange={handleChange} type={"text"} />
        <button style={{ margin: "0 0.5rem" }} onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
}

export default ToDo;
