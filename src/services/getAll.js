const URL = "https://pokeapi.co/api/v2/"


export default async function getAll(pag) {

  const res = await fetch(`${URL}pokemon?limit=20&offset=${20*pag}`)
  const {results} = await res.json()

  return results

}