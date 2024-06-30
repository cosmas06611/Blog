import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* only when {error code 1 is true will the below code run through } */}
      {error && <div>{error}</div>}
      {isPending && <div>Please wait Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

// to watch the data base we pass this set of code in the terminal
//  npx  json-server --watch data/db.json --port 8000

// we import the useFetch component into he Home component
//  we also destructed the return data i.e
// from useFetch , const {data : blogs, isPending, error} = useFetch ("http://localhost:8000/blogs")
// we also changed the name data to blogs i.e data: blogs, so data becomes blogs
//  in other for the code to run, however we can still make use of name data
// but we pass data as a props in <BlogList/> component
