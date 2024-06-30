import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const [isPending, setIsPending] = useState(false)
const history = useHistory()

const handleOnSubmit = (e) =>{
  e.preventDefault();
   const blog = {title, body, author}
  setIsPending(true)

 fetch('http://localhost:8000/blogs', {
  method: "POST",
  headers: {"content-type":"application/json"},
  body: JSON.stringify(blog)
 }).then(()=>{
  console.log('new blog post')
  setIsPending(false)
  // this hook is from react-router-dom andits used to go back to page afte u are done
  // it has method such as .go(,) and .push as used below
  history.push('/')
 })
}

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleOnSubmit}>
        <label>Blog title:</label>
        <input 
        type="text" 
        value={title}
        required 
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
        value={body}
        required
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
       {!isPending && <button>Add Blog</button>}
       {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
  
  //  =>TO POST DATA INTO AN END POINT 
  // YOU FETCH THE DATA fetch('http://localhost:8000/blogs', {
  // =>DEFINE THE METHOD TO BE POST
  // method: "POST"
  // =>INDICATE THE TYPE OF DATA
  // headers: {"content-type": "application/json"}
  // =>CONVERT THE DATA TO JSON
  // body:JSON.stringify(blog)
  // }).then (()=>{
    // console.log("new blog post")})
  // since this post method is an asynchronous process
  // we can tag a then method and return an anonymous function