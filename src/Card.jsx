import React from "react";
import data from "./Data"
import "./index.css"

export default function Card(){

    const [flippedStates, setFlippedStates] = React.useState(
        data().map(() => false) // Initialize all cards as unflipped
      );
    
      const handleFlip = (index) => {
        setFlippedStates((prevStates) =>
          prevStates.map((state, i) => (i === index ? !state : state))
        );
      };

const cards = data().map((card, index)=>{

       return (
       <>
        <div 
           key={card.id} 
           id={`flipDiv${card.id}`} 
           className={`flip-card ${flippedStates[index] ? "flipped" : ""}`}
           onClick={() => handleFlip(index)}
           >
        <img className="thumbnail" src={card.image} alt="Thumbnail" />
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                               <p dangerouslySetInnerHTML={{ __html: card.textEn }}></p>
                               <br/>
                                <a href={card.link}><button>{card.btnTextEn}</button></a>
                                <img className="smallFlag" src="smallEnFlag.jpg" />
                            </div>
                            <div className="flip-card-back">
                               
                            <p dangerouslySetInnerHTML={{ __html: card.textRo }}></p>
                                <br />
                                
                                <a href={card.link}><button>{card.btnTextRo}</button></a>
                                 <img className="smallFlag" src="smallRoFlag.jpg" />
                            </div>
                        </div> 
        </div>
        </>
     )
})

return cards

}