import { PokemonRow } from "./PokemonRow";
import { usePokemon } from "../hook/usePokemon";

export const PokemonPage = () => {
    
    const {pokemons,prevPage,nextPage} = usePokemon();

    return (
        <>
            <h1>Lista Pokemones</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons.map(pokemons => (
                            <PokemonRow pokemon={pokemons}/>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button className="buttonPaginator" onClick={prevPage}>Prev</button>
                <button className="buttonPaginator" onClick={nextPage}>Next</button>
            </div>
        </>
    )
}