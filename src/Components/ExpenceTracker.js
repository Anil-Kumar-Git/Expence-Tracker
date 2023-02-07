import React, { useState, useEffect } from "react";
import Expense from "./Expence";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";
import { useDispatch } from "react-redux";
import { userAdded, userDelete } from "../store/userSlice";
import { Col, Row, Container, Card } from "react-bootstrap";

export default function ExpenceTracker() {
  const dispatch = useDispatch();

  //  const navigate=useNavigate();

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);

  const calculateData = () => {
    let income = 0,
      expense = 0;

    history.forEach((data) => {
      if (data.type == "income") {
        income += data.amount;
      } else if (data.type == "expense") {
        expense += data.amount;
      }
    });
    setIncome(income);
    setExpense(expense);
  };

  const newAddDataForm = (item) => {
    let newstatedata = [...history, item];
    setHistory(newstatedata);
    dispatch(userAdded(newstatedata));
  };

  const deleteValue = (id) => {
    const newhistoryGenrate = history.filter((item) => item.id != id);
   
    console.log(id,"idForDelete")
    setHistory(newhistoryGenrate);
    dispatch(userDelete(id));
  };

  // useEffect(() => {

  //   const localState = JSON.parse(localStorage.getItem('expenceTracerState'));

  //   if (localState) {

  //     setHistory(localState)

  //   }
  //   else {
  //     calculateData()
  //   }
  // }, []);

  useEffect(() => {
    calculateData();
  }, [history]);

  return (
    <div>
      <Container>
        <Row>
          <Card bg="dark" border="dark">
            {" "}
            <h1>Expense Tracker</h1>{" "}
          </Card>
        </Row>
        <Row>
          <Card body border="dark">
            <Expense income={income} expense={expense} />
            <Row>
              <Col>
                <TransactionForm newAddDataForm={newAddDataForm} />
              </Col>
              <Col>
                <TransactionHistory
                  historyData={history}
                  deleteValue={deleteValue}
                />
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
