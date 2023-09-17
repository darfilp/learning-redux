
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

interface State {
  money: {
    cash: number
  },
  customers: string[]
}

function App() {

  const dispatch = useDispatch()

  const cash = useSelector((state: State) => state.money.cash)

  const setCash = (countMoney: number) => {
    dispatch({
      type: 'пополнить',
      payload: countMoney
    })
  }

  const getCash = (countMoney: number) => {
    dispatch({
      type: 'снять',
      payload: countMoney
    })
  }


  return (
    <div className="App">
      Количество денег: {cash}<br/>
      <button onClick={() => setCash(Number(prompt()))}>Пополнить</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять</button> <br/>
      Количество клиентов: {cash}<br/>
    </div>
  );
}

export default App;
