import React from 'react';
import enviarData from '../routes/postMovies'
import { StyleSheet, Text, View, ScrollView,Button, Image } from 'react-native';
import { Container } from 'native-base';
import getData from '../routes/Getdata'
import { ListItem } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
class pedido {
  constructor(producto){
    this._producto = producto;
  }
  get producto(){
    return this.producto
  }
}
class Envio extends pedido{
  constructor(producto,envio){
    super(producto)
    this._envio = envio
  }
  get envio(){
    return this._envio
  }
}



export default class Carrito extends React.Component {
constructor(props){
  super(props);
  this.state = {
    productos: null,
    loading: true,
    producto: null,
    envio: null
  }
  this.envio = this.envio.bind(this)
}
 componentDidMount=async()=> {
    getData().then((data) => {
      this.setState({
        productos: data,
        loading: false,
      })  
    });

 }
envio=async(event)=>{
  const envio = new Envio('producto',event)
  
    await this.setState({
        envio: envio.envio
    })
  console.log(envio)
}
sendData(){
     const data = JSON.stringify({
        producto: this.state.producto,
        envio: this.state.envio,
    })
    enviarData(data)
}

 render(){
      if(this.state.loading) {
        return <Text>Cargando</Text>
    }
  return (
    <Container>
        <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        Bienvenido
        </Text>
        <Image source={require('./chair.png')} style={{width: 40, height: 40}} />
      <ScrollView>
        <View >
        <RNPickerSelect
            onValueChange={(value) => this.envio(value)}
            items={[
                { label: 'Servientrega', value: 'Servientrega' },
                { label: 'Correos del Ecuador', value: 'Correos del Ecuador' },
                { label: 'DHL', value: 'DHL' },
            ]}
        />
        <Button
          title="Comprar"
          onPress={() => this.sendData()}
        />      
    {
        
    this.state.productos.map((l, i) =>{
      
        return(
        
          <ListItem key={i}
          leftAvatar={{ source: {uri: 'data:image/jpeg;base64,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'}}}
          subtitle={l.envio}
          bottomDivider
        ></ListItem>
        
        
        )
      
     
    } )}
  </View>
  </ScrollView>
    
    </Container>
   
  
  );
}
}
