import React, {useState} from "react";
import Input from "../UpdateBook/Input";
import axios from "axios";

const AddForm = (props) => {
    const {showAdd,close} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('updated')
    }
    const [title, setTitle] = useState("Book title");
    const [author, setAuthor] = useState("Book Author");
    const [category, setCategory] = useState("Book Category");
    const [pages, setPages] = useState("Book Page Number");

    const Addbook = () => {
        const data = {
            name : title,
            category : [
                {
                    id: category
                }
            ],
            auteur : author,
            page_size : pages
        }
        console.log(data);
        const promise = axios.post("http://localhost:8080/books", [data]);
        promise.then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.error(err);
        })
    }
    return(
           <div className="update-book-container" showAdd={showAdd}> 
                <div className="update-book" >
                     <div className="update-header"><h2>Add a new book to the library</h2><span className="close" onClick={close}>X</span></div>  
                        <form onSubmit={handleSubmit}>
                            <Input value={title} handleChange={setTitle}/>
                            <Input value={author} handleChange={setAuthor}/>
                            <Input value={category} handleChange={setCategory}/>
                            <Input value={pages} handleChange={setPages}/>
                            <button className="update-button button4" onClick={() => {
                                Addbook();
                                close();
                            }}>Add</button>
                        </form>
               </div>
           </div>
    )
}
export default AddForm;