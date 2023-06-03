import React, { MouseEvent } from "react";

interface FoodProps {
  name: string;
  src: string;
  price: number;
  onClickAdd: (event: MouseEvent<HTMLDivElement>) => void;
}

const Food: React.FC<FoodProps> = (props) => {
    return <div>
        <div className={props.name} id="block" onClick={(event) => {
            props.onClickAdd(event);
        }}>
            <img className={props.name} alt={props.name} src={props.src} />
            {props.name} <p>{props.price + 'KGS'}</p>
      </div>
  </div>;
};

export default Food;
