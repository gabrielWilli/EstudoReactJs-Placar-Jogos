import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Time extends Component {
  render () {
    return (
      <div>
        <h1> {this.props.nome}</h1>
        <h2>{this.props.gols}</h2>
        <BotaoGol marcarGols={this.props.marcarGols} />
      </div>
      )
  }
}

class Partida extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.estadio}</h1>
        <div>
          <span>{this.props.data}</span>
          <span> - </span>
          <span>{this.props.horario}</span>
        </div>
      </div>
      )
  }
}

class BotaoGol extends Component {
  handleClick (event) {
    event.preventDefault ()
    
    this.props.marcarGols()
    
  }
  
  render (){
  return (
      <button onClick={this.handleClick.bind(this)}> Gooool!! </button>
    )
  }
}

class PlacarContainer extends Component {
  constructor(){
    super()
    
    this.state = {
      golsVisitantes: 0,
      golsCasa: 0,
    }
  }
  
  addGolsVisit (){
    this.setState({
      golsVisitantes: this.state.golsVisitantes + 1
    })
  }
  
  addGolsCasa() {
    this.setState({
      golsCasa: this.state.golsCasa + 1
    })
  }
  
  render() {
    
    const {partida, casa, visitante} = this.props
    
    return (
      <div>
        <div>
          <h3> Casa </h3>
          <Time nome = {casa.nome} 
                gols = {this.state.golsCasa}
                marcarGols = {this.addGolsCasa.bind(this)}/>
        </div>
        <div>
          <h3> Partida </h3>
          <Partida {...partida}
          />
        </div>
        <div>
         <h3> Visitante </h3>
          <Time nome = {visitante.nome}
                gols= {this.state.golsVisitantes}
                marcarGols = {this.addGolsVisit.bind(this)}/>
        </div>
      </div>
    );
  }
}

const dados = {
  partida: {
    estadio: "Morumbi",
    data: "20/04/2020",
    horario: "14:30"
  },
  
  casa: {
    nome: "São Paulo",
  },
  
  visitante: {
    nome: "Palmeiras",
  }
}

class App extends Component {
  render() {
    return <PlacarContainer {...dados}/>
  }
}


ReactDOM.render(<App />,
  document.getElementById('react-app')
);
