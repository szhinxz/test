import React,{ useState,Form,InputGroup } from "react";
import {motion} from "framer-motion";
function Movie({movie}) {
    const [Item,setItem] = useState([]);

    // const filterItem = (categItem) =>{
    //     const updateItems = Object.values(test).filter((curElem) =>{
    //         return curElem.known_for_department.toString() === categItem.toString()
    //     })
    //     console.log(updateItems)
    //     setItem(updateItems)

    // }
    return(
        <>
        {/* <img src={"http://image.tmdb.org/t/p/w500" + movie.result} alt="" /> */}
        <div className="box_movie">
        {movie.known_for.map((e,i)=> {
            // console.log(e)
            return(
                <>
                <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{ opacity: 0}} className="card_movie">
                <div className="text_title">
                    {e.title}
                    </div>
                    <div className="img_movie">
                    <img key={i} src={"http://image.tmdb.org/t/p/w500"+e.poster_path} alt="" />
                    </div>
                </motion.div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default Movie;