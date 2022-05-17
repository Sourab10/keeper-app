import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const[note,setNote]=useState({
    title:"",
    content:""
  })

  function handlechange(event){
 const{name,value}=event.target
setNote (prevNote=>{
return {
  ...prevNote,
  [name]:value
}
})
}

function submitButton(event){
  props.onAdd(note)
  setNote({
    title:"",
    content:""
  })
  event.preventDefault();

}
  return (
    <div>
      <form className="createNote">
        <input name="title" onChange={handlechange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handlechange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitButton}>
<AddIcon/>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
