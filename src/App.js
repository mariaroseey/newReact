
import { useState } from "react";
import Card from "./myComponent/MyCard";

function App(){

    const [myData, setData] = useState([
        {
            id: 1,
            Name: "ha",
            image: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            Name: "he",
            image: "https://images.unsplash.com/photo-1705162005861-607698ffbaa3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            Name: "ho",
            image: "https://images.unsplash.com/photo-1695990190561-097b12428382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

        },
        {
          id: 4,
          Name: "ha",
          image: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
      },
      {
          id: 5,
          Name: "he",
          image: "https://images.unsplash.com/photo-1705162005861-607698ffbaa3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
          id: 6,
          Name: "ho",
          image: "https://images.unsplash.com/photo-1695990190561-097b12428382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

      },
      {
        id: 7,
        Name: "ha",
        image: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        Name: "he",
        image: "https://images.unsplash.com/photo-1705162005861-607698ffbaa3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        Name: "ho",
        image: "https://images.unsplash.com/photo-1695990190561-097b12428382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

    },
    {
      id: 10,
      Name: "ha",
      image: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      id: 11,
      Name: "he",
      image: "https://images.unsplash.com/photo-1705162005861-607698ffbaa3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      id: 12,
      Name: "ho",
      image: "https://images.unsplash.com/photo-1695990190561-097b12428382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

  }



    ])

    return(
        <div>
   
            <Card myData={myData}/>

            
        </div>
    )
}

export default App;
