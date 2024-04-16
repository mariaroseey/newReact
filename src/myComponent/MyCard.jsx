
function Card({myData}) {
    return(
        <div>
        <div className="grid grid-cols-4 ml-20" >
            {

            myData.map( (items, index)=> {
               return(
                <div className="flex gap-4 ">
                    <img className="w-[100px] h-[100px] rounded-full p-2" src={items.image} alt=""/>
                    <p className="pt-5 font-bold">{items.Name}</p>

                </div>
               ) 
            })
            
        }
        </div>
        <div className="grid grid-cols-2 ml-12 pt-10 " >
            {

            myData.map( (items, index)=> {
               return(
                <div className="flex gap-4 grid place-items-center">
                    <img className="w-[500px] h-[500px] rounded p-2" src={items.image} alt=""/>
                   

                </div>
               ) 
            })
            
        }
        </div>
        </div>
    )
}

export default Card