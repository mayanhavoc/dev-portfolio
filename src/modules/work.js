import React from 'react';
import Card from '../components/card';

const Work = props => {
  return (
    <section>
        <h2>Work</h2>
        <Card 
            title="Project No.1"
            altTxt="Alternative text"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate consectetur illo odio voluptatum veritatis quia possimus. Distinctio velit, enim quam assumenda id perferendis iste qui facilis, culpa iure dolorem, eveniet facere optio eligendi reiciendis adipisci cumque ipsam reprehenderit perspiciatis error a possimus laudantium. Voluptatum ratione voluptate eos velit eaque."
            linkRef="/"
            items={[{id:1, name:'task no.1'}, {id:2, name:'task no.2'}, {id:3, name:'task no.3'}]}
            />
        <Card />
        <Card />
    </section>
  )
}

export default Work