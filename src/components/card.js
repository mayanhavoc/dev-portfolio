import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <section>
       <h2>{props.title}</h2>
       <img src={props.img} alt={props.altTxt} />
       <p>{props.description}</p>
       <ul>
        {() => ((items) => (
            <li key={items.id}>{items.name}</li>
        ))}
       </ul>
       {/* <button>
        <Link to={props.linkRef}>{props.buttonTxt}</Link>
       </button> */}
    </section>
  )
}

export default Card