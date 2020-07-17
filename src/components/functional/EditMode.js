import React, { useEffect, useState } from "react";

function EditMode(props) {
  const [editInput, setEditInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    props.EditMode == props.item.id && setIsEdit(true);
    console.log(props.item.id, props.EditMode);
  }, [props.EditMode]);

  const handleEdit = (item) => {
    props.setEditMode(item.id);
    setEditInput(item.value);
  };

  const handleSave = (id) => {
    let tempList = props.list;
    let index = props.list.findIndex((i) => i.id == id);
    tempList.splice(index, 1, { value: editInput, id });
    props.setList(tempList);
    props.setEditMode(0);
  };

  const handleSaveBeheshti = (id) => {
    let tempList = [...props.list];
    tempList.filter((i) => i.id == id)[0].value = editInput;
    props.setList(tempList);
    props.setEditMode(0);
  };
  const handleChangeEdit = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <>
      {/* EditMode */}
      <span>
        <input value={editInput} onChange={handleChangeEdit} type="text" />
        <button onClick={() => handleSaveBeheshti(props.item.id)}>save</button>
      </span>
      {/* End of EditMode */}{" "}
    </>
  );
}

export default EditMode;
