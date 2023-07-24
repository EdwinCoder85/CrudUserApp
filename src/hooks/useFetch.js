import axios from "axios";
import { useState } from "react";

const useFetch = (baseURL, setCloseForm) => {

  const [infoApi, setInfoApi] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // GET
  const getApi = (path) => {
    setIsLoading(true)
    const url = `${baseURL}${path}/`
    axios.get(url)
    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))
    .finally(() =>
      setTimeout(() => {
        setIsLoading(false);
      }, 200)
    )
  }

  // POST
  const postApi = (path, data) => {
    const url = `${baseURL}${path}/`
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      setInfoApi([...infoApi, res.data])
      // setCloseForm(true)
    })
    .catch(err => console.log(err))
  }

  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseURL}${path}/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      const infoApiFiltered = infoApi.filter(ele => ele.id !== id)
      setInfoApi(infoApiFiltered)
      // setCloseForm(true)
    })
    .catch(err => console.log(err))
  }

  // UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseURL}${path}/${id}/`
    axios.put(url, data)
    .then(res => {
      console.log(res.data)
      const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
      setInfoApi(infoApiMapped)
      // setCloseForm(true)
    })
    .catch(err => console.log(err))
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi, isLoading ]
}

export default useFetch;
