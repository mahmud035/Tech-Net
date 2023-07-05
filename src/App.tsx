import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
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
        <div>{count}</div>
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
