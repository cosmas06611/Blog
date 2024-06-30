import React from 'react'
import { useParams , useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
    const {id} =useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

function handleDelete (){
  fetch('http://localhost:8000/blogs/' + blog.id, {
    method: 'DELETE'
  }).then(()=>{
    history.push('/')
  })
}

function handleBack (){
  history.go('-1');
}

  return (
    <div className='blog-details'>
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
