import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset, decrementByAmount } from "../../store/Counter/counterSlice";

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div>
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
            <span>{ count }</span>
            <button
                onClick={()=> dispatch(increment())}
            >+</button>
            <button
                onClick={()=> dispatch(incrementByAmount(10))}
            >incremnet by 10</button>
            <button
                onClick={()=> dispatch(reset())}
            >reset</button>
            <button
                onClick={()=> dispatch(decrementByAmount(10))}
            >decrement by 10</button>
        </div>
    )
};

export default Counter;