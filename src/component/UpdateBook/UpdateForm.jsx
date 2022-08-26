import React, {useState} from "react";
import Input from "./Input";
import "./UpdateBook.css"

const UpdateForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('updated')
    }
    const [title, setTitle] = useState("New title");
    const [author, setAuthor] = useState("New Author");
    const [category, setCategory] = useState("New Category");
    const [pages, setPages] = useState("New Page Numbers");
    return(
           <div className="update-book-container">
               <div className="update-book">
                   <form action="#" onSubmit={handleSubmit}>
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