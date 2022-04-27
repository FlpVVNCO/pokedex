import React from 'react'

const Pokemon = ({pokemon, pokemonTipo, pokemonHabilidad}) => {


    return (
        <div className='container'>
            {pokemon.map((data) => {
                return(
                    <div className='card'  key={data.id}>
                        <h1>{data.name}</h1>
                        <img src={data.sprites["front_default"]} />
                        <div className='divTable'>
                            <div className='divTableBody'>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Tipo: </div>
                                    <div className='divTableCell'>
                                         {data.types[0].type.name}{/*/{data.types[1] === [] ? '' : `${data.types[1].type.name}`} */}
                                    </div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Altura: </div>
                                    <div className='divTableCell'>
                                        {""}{Math.round((data.height * 3.9) * 2.54)} Cm
                                    </div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Peso: </div>
                                    <div className='divTableCell'>
                                        {" "} {Math.round((data.weight / 4.3) / 2.2 )} Kg
                                    </div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Estadisticas: </div>
                                    <div className='divTableCell'> 
                                        Hp: {data.stats[0].base_stat} 
                                        <tr/> Ataque: {data.stats[1].base_stat} 
                                        <tr/> Defensa: {data.stats[2].base_stat} 
                                        <tr/> Ataque especial: {data.stats[3].base_stat}
                                        <tr/> Defensa especial: {data.stats[4].base_stat}
                                        <tr/> Rapidez: {data.stats[5].base_stat}
                                    </div>
                                </div>
                                {/* <div className='divTableRow'>
                                    <div className='divTableCell'>Habilidades: </div>
                                    <div className='divTableCell'>
                                        {data.abilities[0].ability.name == [] ? 'No habilidad' :`${data.abilities[0].ability.name}`}/{data.abilities[1].ability.name == [] ? 'No habilidad' :`${data.abilities[1].ability.name}`}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
    )
}

export default Pokemon