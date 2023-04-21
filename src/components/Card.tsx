import React, {useState, FC} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}


interface CardProps {
    width?: string;
    height?: string;
    children?:React.ReactChild | React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void; // т.к функция ничего не возвращает значит пишем void
}

const Card: FC<CardProps> = ({width, height, onClick, variant, children}) => { // FC - FuctionComponent <CardProps> - generic type

    const [state, setState] = useState(3);

    return (
        <div style={{width, height, 
        border: variant === CardVariant.outlined ? "2px solid white" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
        }}
        onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;