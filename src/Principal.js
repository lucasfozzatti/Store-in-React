import React from 'react';
import Menu from './Menu';
import List from './List';
import Nav2 from './Nav2';
import Footer from './footer';
import Description from './Description';
import Nav from './Nav';



class Principal extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
          books:[
            {id:0, rating: 4, text:'¿Te gustaría cambiar tu ambiente y fascinar a tus invitados? Con tan solo utilizar este tipo de iluminación cambiara por completo a un estilo más retro' ,title: 'Iluminación', image: 'minimalist.jpg', link: "http://localhost:3000/Secondary", name:"Iluminacion"},
            {id:1, rating: 3,text:'¿Cansado de la ropa común y poco extravagante? Cambia tu forma de vestir, cambia tu estilo ¡se tú mismo!' , title: 'Moda Masculina', image: 'tocadisco.jpg', link: "https://amzn.to/3vNIe6R", name:'Masculina'},
            {id:2, rating: 5,text:'Todos sabemos que la moda de antes está volviendo ¡Y no es casualidad! Quien no quisiera vestir con tanto estilo. Navega por cada uno de estos increíbles diseños' , title: 'Moda femenina', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
            {id:3, rating: 5,text:'¿Quisieras revivir la mejor época, volver a los confines del sonido y recordar cómo se escuchaban tus bandas favoritas en uno de estos equipos o simplemente darle otro estilo a tu sala?' , title: 'Audio', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
            {id:4, rating: 5,text:'Esto no es cosa de gente común. Tu viste esta sección y no es casualidad, tienes estilo y lo sabes bien. Redecora tu casa con estos asombrosos artículos vintage.' , title: 'Decoración', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
            {id:6, rating: 5,text:'¿Te gusta cocinar verdad? Cambia el ambiente de tu cocina con estos geniales productos vintage de excelente calidad' , title: 'Cocina', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
            {id:7, rating: 5,text:'El trabajo es algo que con el tiempo se torna muy repetitivo. Permítete cosas “nuevas”. Dale otro aspecto a tu entorno laboral.' , title: 'Oficina', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
            {id:8, rating: 5,text:'Ya lo nuevo quedo atrás. Remodela tu hogar con el mejor estilo Dale tu toque de elegancia' , title: 'Muebles', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"}
          ],
          copyBooks: [],
          width: 0,
        };
        // this.updateRating = this.updateRating.bind(this);
      }
    
      initBooks(){
    
        this.setState((state,props) => ({
          copyBooks: [...state.books],
          width: window.innerWidth
        }));
    
      }
      componentDidMount(){
        this.initBooks();
        window.addEventListener('resize', this.updateWindowDimensions);
        
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      
      

  render(){
    console.log("hola",this.state.width)
    return (

      <div className="principal">
        
        <Menu title="Minimalist"/>
        {(this.state.width > 600)? <Nav2/> : <Nav/> }
        <Description />
        <List className="list" items={this.state.copyBooks}/>
        <Footer title="Minimalist"/>

        </div>
    )
  }
}

export default Principal;
