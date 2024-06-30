import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch please try again");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            // error code 1 set err.message
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

// custom hook: we make use of the custom hook so we can re use the component useFetch
// the custom hook: useFetch must return the either an array or an object
// in our case the custom hook returns an object {data, isPending, error}
// {data, isPending , error} which are all the data the useState manages
// the fetch() should return a url this wat it makes our component to be reuseable
// we pass the url to the custom hook as a parameter which is the useFetch custom hook
// we also pass the url as a dependency in this case the component watches for changes in the url and re renders the component


// performing a clean up after useEffect runs
// to perform a clean up after useEffect we can make use of abortController()
// step 1
// const abortCont = new AbortController()
// step 2
// associate it with the fetch request which is the second parameter fetch(urs, {signal: abortCont.signal})
// step 3
// return an anonymous function calling the abort method e.g () => abortCont.abort()
// if error persist in the catch block make an if statement recognizing the error.name === "AbortError" clg the error.