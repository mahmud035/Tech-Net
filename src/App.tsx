import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './redux/features/counter/counterSlice';
import { RootState } from './redux/store';
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-center gap-6 pt-4">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-green-500 rounded-md px-2 py-2.5"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 border-green-500 rounded-md px-2 py-2.5"
        >
          Increment By Amount
        </button>

        <div className="font-bold text-lg">{count}</div>

        <button
          onClick={() => dispatch(decrementByAmount(5))}
          className="border-2 border-red-500 rounded-md px-2 py-2.5"
        >
          Decrement By Amount
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="border-2 border-red-500 rounded-md px-2 py-2.5"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
