import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"

export default function ShowValue() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => { 
            setLoading(true);
            try {
                const { data: response } = await axios.get(Url);
                setData(response);
            } catch (error) {
                // console.error(error.message);
            }
            setLoading(false);
        }

        fetchData(); 
    }, []);
    console.log(data);

   
    return (
<div>
    <h1>show Data</h1>

    <table className="table table-striped table-dark">
    <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      { Object.entries( data ).map( ( [key, value] ) => {
        return (  
          <tr>
            <td>{ key }</td>
            <td>{ value }</td>
          </tr>
        )
      }
      ) }
    </tbody>
</table>



</div>
    )
}
