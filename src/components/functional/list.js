import React, { useState } from "react";

function List(props) {
  const [editMode, setEditMode] = useState(0);
  const [editInput, setEditInput] = useState("");
  
  const handleChangeEdit = (e) => {
    setEditInput(e.target.value);
  };
  const handleCheck = (id) => {
    props.doneList.includes(id)
      ? props.setDoneList([...props.doneList.filter((i) => i !== id)])
      : props.setDoneList([...props.doneList, id]);
  };

  const handleDelete = (id) => {
    props.setList([...props.list.filter((i) => i.id != id)]);
    props.setDoneList([...props.doneList.filter((i) => i !== id)]);
  };

  const handleEdit = (item) => {
    setEditMode(item.id);
    setEditInput(item.value);
  };

  const handleSave = (id) => {
    let tempList = props.list;
    let index = props.list.findIndex((i) => i.id == id);
    tempList.splice(index, 1, { value: editInput, id });
    props.setList(tempList);
    setEditMode(0);
  };

  const handleSaveBeheshti = (id) => {
    let tempList = [...props.list];
    tempList.filter((i) => i.id == id)[0].value = editInput;
    props.setList(tempList);
    setEditMode(0);
  };

  return (
    <>
      <ol>
        {props.list.map((item, index) => {
          return (
            <li
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {editMode == item.id ? (
                <>
                  {" "}
                  {/* EditMode */}
                  <span>
                    <input
                      value={editInput}
                      onChange={handleChangeEdit}
                      type="text"
                    />
                    <button onClick={() => handleSaveBeheshti(item.id)}>
                      save
                    </button>
                  </span>
                  {/* End of EditMode */}
                </>
              ) : (
                <>
                  {/* Normal Mode */}
                  <input
                    checked={props.doneList.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                    style={{ margin: "0 0.5rem 0 0 ", alignSelf: "center" }}
                    type="checkbox"
                  />
                  <span style={{ margin: "0 0.5rem" }}>{item.value}</span>
                  <span style={{ margin: "0 0.5rem", alignSelf: "center" }}>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </span>
                  <span style={{ margin: "0 0.5rem", alignSelf: "center" }}>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                  </span>
                  {/* End of Normal Mode */}{" "}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default List;
