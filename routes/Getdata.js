
const getData=async()=>{
  const url = 'http://192.168.100.38:4000/productosCarrito'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }   
  }); 
const json = await response.json();
console.log(json);     
return json;
}
export default getData