import * as React from 'react';
import {useState,useEffect} from 'react'; 

function Items(){
const [data,setData] = useState([]);

useEffect(()=>
{
  fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>setData(data.products));
})


return (
<>
<table>
<tr>
  <th>ID</th>
  <th>Title</th>
  <th>Description</th>
  <th>Price</th>
</tr>
{
  data && data.map(value=>{
    <tr>
<td>value.id</td>
<td>value.title</td>
<td>value.description</td>
<td>value.price</td>
    </tr>
  })
 
}

</table>
</>)

}
export default Items;