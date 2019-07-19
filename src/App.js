import React from 'react';
import './App.scss';

const QOUTES = [
  {
    text: 'Lo que la gente llama ‘amor’ es sólo una reacción química que motiva a los animales a aparearse',
    author: 'Rick y Morty.'
  },
  {
    text: 'A veces la ciencia es mucho más arte que ciencia, Morty. Mucha gente no entiende eso',
    author: 'Rick y Morty.'
  },
  {
    text: 'Nadie existe a propósito. Nadie pertenece a ningún lugar. Todos vamos a morir.',
    author: 'Rick y Morty.'
  },
  {
    text: '¡Wubba lubba dub dub!',
    author: 'Rick y Morty.'
  },
  {
    text: 'En el juego de tronos, o ganas o mueres.',
    author: 'Game of Thrones.'
  },
  {
    text: 'No existen secretos en la vida. Solo verdades escondidas que viven debajo de la superficie.',
    author: 'Dexter.'
  },
  {
    text: 'Las emociones positivas son un regalo de nuestros ancestros los animales, la crueldad es un regalo de nuestra propia humanidad.',
    author: 'Hannibal.'
  },
  {
    text: 'No sé si quiero vivir, si debo hacerlo, o si sólo es un hábito.',
    author: 'The Walking Dead.'
  },
  {
    text: 'Si los hombres se quedaran embarazados, podrías conseguir un aborto en un cajero automático.',
    author: 'Veep.'
  },
  {
    text: 'Nunca pienso en el futuro. Llega demasiado pronto.',
    author: 'Genius (Einstein).'
  },
  {
    text: 'Todo el mundo miente.',
    author: 'House MD.'
  },
  {
    text: '¿Qué le decimos al Dios de la muerte?',
    author: 'Game of Thrones.'
  },
  {
    text: 'El amor es la muerte del deber.',
    author: 'Game of Thrones.'
  },
  {
    text: 'No podemos escoger a quien amamos. Está fuera de nuestro control.',
    author: 'Game of Thrones.'
  },
  {
    text: 'Cuando las personas pregunten qué paso aquí… diles que el Norte recuerda. Diles que el invierno llego para la Casa Frey.',
    author: 'Game of Thrones.'
  }
];

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      quote: {}
    }
    this.changeQoute = this.changeQoute.bind(this);
  }

  componentDidMount(){
    this.setState({quote: QOUTES[Math.floor(Math.random() * (QOUTES.length - 0))]});
  }

  changeQoute(){
    let max = QOUTES.length;
    let index = Math.floor(Math.random() * (max - 0));
    let newQuote = QOUTES[index];
    this.setState({quote: newQuote})
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div className="quote">
            <div id="text" className='courgette'>
              <q>{this.state.quote.text}</q>
            </div>
            <div id="author" className='open-sans'>
              -{this.state.quote.author}
            </div>
          </div>
          <div id="buttons">
            <a className="btn" id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text="${this.state.quote.text}" ${this.state.quote.author}`}>
              <i class="fab fa-twitter"></i>
            </a>
            <button className="btn" onClick={this.changeQoute} id="new-quote">Nueva Frase</button>
          </div> 
        </div>
      </div>
    );
  }
} 

export default App;
