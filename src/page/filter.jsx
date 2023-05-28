import { useEffect, useState } from "react";

// function Filter({movie}){
//     const [Item,setItem] = useState([]);
//     const test = {movie};

//     console.log(Object.values(test))

//     const filterItem = (categItem) =>{
//         const updateItems = Object.values(test).filter((curElem) =>{
//             console.log(curElem)
//             // return curElem.known_for === categItem
//         })
//         console.log(updateItems)
//         setItem(updateItems)

//     }
    
//     return(
//         <>
//          <div className="filter-container">
//             <button className="all_butt" onClick={() => setItem(test)}>All</button>
//             <button className="all_butt" onClick={() => filterItem(38)}>Directing</button>
//             <button className="all_butt" onClick={() => filterItem(18)}>Acting</button>
            
//          </div>
        
//         </>
//     )
// }

function Filter({setActiveGenre,activeGenre,setFiltered ,popular}){
    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter(movie=>movie.known_for_department.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre])
    
    return(
        <>

         <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
            <button className={activeGenre === "Directing" ? "active" : ""} onClick={() => setActiveGenre("Directing")}>Directing</button>
            <button className={activeGenre === "Acting" ? "active" : ""} onClick={() => setActiveGenre("Acting")}>Acting</button>
         </div>

         <div className="inputBox">
            <input type="text" />
            <span>Search...</span>
         </div>
        
        </>
    )
}

export default Filter