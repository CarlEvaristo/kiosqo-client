import React from 'react'
import "./Home.css"
import Axios from "axios"
import NewsList from '../components/NewsList'

export default function Home() {
    const [data, setData] = React.useState()

    // const url = "https://desolate-earth-13157.herokuapp.com/"
    const url = "http://localhost:3001/"

    const config = {
        headers:{
          beKey: "vnrejfvfoj430hfih4f4hui43hfui43hfuh4pqkdowqdjkwq",
        }
      };

    React.useEffect(()=> {
        Axios.get(url, config)		
            .then(res => setData(res.data))
            .catch(err=> console.log("ERROR: " + err))
    },[])
    

    return (
        <div className='container'>
            {data && <NewsList data={data} />}
        </div>
    )
}
