import {useReducer} from 'react';

const reducer = (prevState, action) => {
    if(action.type === "buy_ingredients") return {money: prevState.money -200};
    if(action.type === "sell_meal") return {money: prevState.money +300};
    if(action.type === "celebrity_fee") return {money: prevState.money+1000};
}

export default function Grocery() {
    const initialState = {money: 1000};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: "buy_ingredients"})}>Buy Ingredients</button>
                <button onClick={() => dispatch({type: "sell_meal"})}>Sell Meal</button>
                <button onClick={() => dispatch({type: "celebrity_fee"})}>Celebrity</button>
            </div>
        </div>
    )
}