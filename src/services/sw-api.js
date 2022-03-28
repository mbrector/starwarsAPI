function getAllStarships(){
    return(
fetch('https://swapi.dev/api/starships/')
.then((res)=>{
    return res.json()
})
)}

export default getAllStarships;