import axios from 'axios'
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({setPokemon, setPokemonTipo, setPokemonHabilidad}) => {

    const [busqueda, setBusqueda] = useState('kakuna')
    const [termino, setTermino] = useState('')
    

    const [error, setError] = useState(false)

    const BuscarPoke = e =>{
        e.preventDefault();

        // validar
        if (termino.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // enviar el termino de búsqueda hacia el componente principal
        setBusqueda(termino)
    }

    useEffect(() => {
        if(busqueda === '') return;
        obtenerCategorias()
    }, [busqueda])


    const obtenerCategorias = async () => {
        const toArray = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`
            const res = await axios(url)
            toArray.push(res.data);
            // setPokemonTipo(res.data.types[0].type.name);
            setPokemonHabilidad(res.data.abilities);
            setPokemon(toArray);
            console.log(res.data.types[1].slot);
        } catch (error) {
            console.log(error);
        }
        }
    
    
    return (
        <div>
            <h1 className='titulo'>Busca tu pokemon</h1>
            <form className='form' onSubmit={BuscarPoke}> 
                <input placeholder='busca aqui' type="text" onChange={e => setTermino(e.target.value)} />
                <button
                    className='btn'
                    type='submit'
                >
                    Buscar
                </button>
                {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
            </form>
        </div>
    )
}

export default Formulario