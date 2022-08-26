import React, {useState} from "react";
import Input from "../UpdateBook/Input";

const AddForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('updated')
    }
    const [title, setTitle] = useState("Book title");
    const [author, setAuthor] = useState("Book Author");
    const [category, setCategory] = useState("Book Category");
    const [pages, setPages] = useState("Book Page Number");
    return(
           <div className="update-book-container">
               <div className="update-book">
                   <form action="#" onSubmit={handleSubmit}>
                       <h4>Add a new book to the library</h4>
                       <Input value={title} handleChange={setTitle}/>
                       <Input value={author} handleChange={setAuthor}/>
                       <Input value={category} handleChange={setCategory}/>
                       <Input value={pages} handleChange={setPages}/>
                       <button className="update-button">Add</button>
                   </form>
               </div>
           </div>
    )
}
export default AddForm;