
import './pokemonDetail.css'

export const PokemonDetail = ({ pokemonDetail, setShowPokemonDetail }) => {
console.log(pokemonDetail, 'datos')
    return (  <div className="container-pokemon-detail">
    <div className="pokemon-detail">
        <div className="pokemon-image"><img src={pokemonDetail.sprites.other["official-artwork"].front_default} width="400px" height="auto" /></div>
      <div className="pokemon-details">
        <div>
       <p className='pokemon-detail-line'><b>No. {pokemonDetail.id.toString().padStart(3, '0')} / {pokemonDetail.name.replace(/^./,(str) => str.toUpperCase())}</b></p>
       <p className='pokemon-detail-line2'>
        Type: {pokemonDetail.types[0].type.name.replace(/^./,(str) => str.toUpperCase())}<br />
        Height: {pokemonDetail.height}0 cm<br />
        Weight: {pokemonDetail.weight} lbs</p>
       </div>
       
       <button className="close" onClick={() => { setShowPokemonDetail(false) }}>Close</button>
       </div>   
   </div>
   </div>)
}