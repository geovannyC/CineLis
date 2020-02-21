const enviarData=async(x)=>{
  const url = 'http://192.168.100.38:4000/comprar'
    
    try{
      const response = await fetch(url,{
        method: 'POST',
        body: x,
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        console.log('respuesta favorable')
      }
    }catch(error){
      console.log(error)
    }
  }
export default enviarData;