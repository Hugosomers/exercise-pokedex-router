import React, { Component } from 'react'

export default class PokemonDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
      weight: {},
      summary: '',
      maps: [],
    }
    this.findPokeById = this.findPokeById.bind(this);
  }

  componentDidMount() {
    this.findPokeById();
  }

  findPokeById() {
    const {info} = this.props;
    // console.log(id)
    const {id} = this.props.match.params;
    // console.log(info)
    const theOne = info.find((poke) => poke.id === parseInt(id));
    this.setState({
      name: theOne.name,
      type: theOne.type,
      weight: theOne.averageWeight,
      summary: theOne.summary,
      maps: theOne.foundAt,
    })
    // console.log('Aqui',theOne);
  }
  render() {
    const {name, type, weight, summary, maps} = this.state;
    // console.log(this.state)
    return (
      <div>
        <h1>{name}</h1>
        <p><b>{type}</b></p>
        <p>{weight.value} {weight.measurementUnit}</p>
        <p>{summary}</p>
        <div>
          <h3>Onde encontrar?</h3>
          {maps.map((mapa, index) => (
            <div key={index}>
              <h5>{mapa.location}</h5>
              <img src={mapa.map} alt="Foto do mapa"/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
