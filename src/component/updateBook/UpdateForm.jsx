import React, {useState} from "react";
import Input from "./Input";

const UpdateForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('updated')
    }
    const [title, setTitle] = useState("New Tile");
    const [author, setAuthor] = useState("author");
    const [category, setCategory] = useState("Category");
    const [pages, setPages] = useState("12");
    return(
        <div className="container">
           <div className="update-book-container">
               <form action="src/component/updateBook/UpdateForm#" onSubmit={handleSubmit}>
                 <h4>Change or update book's informations</h4>
                    <Input value={title} handleChange={setTitle}/>
                   <Input value={author} handleChange={setAuthor}/>
                   <Input value={category} handleChange={setCategory}/>
                   <Input value={pages} handleChange={setPages}/>
                   <button className="update-button">Update</button>
               </form>
           </div>
        </div>
    )
}
export default UpdateForm;