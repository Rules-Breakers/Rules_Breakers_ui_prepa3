import React, {useState} from "react";
import Input from "./Input";
import "./UpdateBook.css"
import axios from "axios";

const UpdateForm = (props) => {
    const {showUpdate, closeUpdate} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [title, setTitle] = useState("New title");
    const [author, setAuthor] = useState("New Author");
    const [category, setCategory] = useState("0, or 1, or ...");
    const [pages, setPages] = useState("100, or 200, or ... ");
    const UpdateBook = () => {
        const data = {
            name : title,
            category : category,
            author : author,
            page_size : pages
        }
        const promise = axios.put("https://virtserver.swaggerhub.com/Oniitsiky/librairies/1.0.1/books", data);
        promise.then((res) => {})
            .catch((err) => {
                console.error(err);
            })
    }
    return(
           <div className="update-book-container" showUpdate={showUpdate}>
               <div className="update-book">
                   <div className="update-header">
                       <h2>Change or update book's informations</h2><span className="close" onClick={closeUpdate}>X</span>
                   </div>
                   <form action="#" onSubmit={handleSubmit}>
                       <Input value={title} type="text" handleChange={setTitle}/>
                       <Input value={author} type="text" handleChange={setAuthor}/>
                       <Input value={category} type="number" handleChange={setCategory}/>
                       <Input value={pages} type="number" handleChange={setPages}/>
                       <button className="update-button button4" onClick={() => {
                           UpdateBook();
                           closeUpdate();
                       }}>Update</button>
                   </form>
               </div>
           </div>
    )
}
export default UpdateForm;