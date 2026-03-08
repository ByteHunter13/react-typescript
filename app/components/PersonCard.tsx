import React from 'react';

type Props = {
    name: string;
    age: number;
}

const PersonCard = ({ name, age }: Props) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
}

export default PersonCard;