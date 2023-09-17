import { useDispatch, useSelector } from "react-redux";
import "./App.css";

interface Customer {
  id: number;
  name: string;
}

interface State {
  money: {
    cash: number;
  };
  customers: {
    customers: Customer[];
  };
}

function App() {
  // добавить клиента
  const dispatch = useDispatch();

  const cash = useSelector((state: State) => state.money.cash);

  const customers = useSelector((state: State) => state.customers.customers);

  const setCash = (countMoney: number) => {
    dispatch({
      type: "пополнить",
      payload: countMoney,
    });
  };

  const getCash = (countMoney: number) => {
    dispatch({
      type: "снять",
      payload: countMoney,
    });
  };

  const addCustomer = (nameCustomer: string | null) => {
    if (nameCustomer === null) return;

    dispatch({
      type: "добавить клиента",
      customer: {
        id: Date.now(),
        name: nameCustomer,
      },
    });
  };

  const deleteCustomer = (idCustomer: number, nameCustomer: string) => {
    dispatch({
      type: 'удали клиента',
      customer: {
        name: nameCustomer,
        id: idCustomer,
      },
    })
    console.log(idCustomer)
  }

  return (
    <div className="App">
      Количество денег: {cash}
      <br />
      <button onClick={() => setCash(Number(prompt()))}>Пополнить</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять</button> <br />
      Количество клиентов:{" "}
      {customers.length === 0
        ? "нет данных"
        : customers.map((customer) => (
            <div>
              {customer.name} <button onClick={() => deleteCustomer(customer.id, customer.name)}>Удалить</button>
            </div>
          ))}
      <br />
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
    </div>
  );
}

export default App;
