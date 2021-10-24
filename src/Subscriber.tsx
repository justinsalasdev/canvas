import { increase } from "./services/counter/counterSlice";
import { increment } from "./services/amount/amountSlice";
import { useGetter, useSetter } from "./store/hooks";

export default function Subscriber() {
  const count = useGetter((state) => state.counter.value);
  const _amount = useGetter((state) => state._amount.amount.value);
  const dispatch = useSetter();

  function handleClick() {
    dispatch(increase(1));
  }

  function handleClick2() {
    dispatch(increment());
  }

  return (
    <div>
      <span>count {count}</span>
      <span>amount {_amount}</span>
      <button onClick={handleClick}>increase</button>
      <button onClick={handleClick2}>increment</button>
    </div>
  );
}
