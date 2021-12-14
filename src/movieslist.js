import Cardd from "./moviecard";

function Movies({moviedata}) {
    return (
            <div className="flex">
        {moviedata.map((el,i)=><Cardd el={el}/>)}
            </div> 
        )
    
}
export default Movies ;