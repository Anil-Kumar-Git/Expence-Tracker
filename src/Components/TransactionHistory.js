import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TransactionHistory({ historyData, deleteValue }) {
 
  const [showAll, setShowAll] = useState(false);

//  const allUserData=useSelector((state)=>(state))
//  console.log(allUserData, "histor");

  useEffect(() => {
    dataHistory();
  }, [showAll]);

  const {userData}=useSelector((state)=>(state.users.userData))
  console.log(userData,"userData");

  const dataHistory = () => {
    const alldata = userData?.map((data) => {
      let bgset = data?.type == "income" ? "success" : "danger";
      return (
        <ListGroup.Item variant={bgset} key={data.id}>
          <div
            className="d-flex"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{data.name}</div>
            <div>Rs {data.amount}</div>
            <div>
              {data.date}
            </div>
            <div>
              <button className="btn" onClick={() => deleteValue(data.id)}>
                x
              </button>
            </div>
          </div>
        </ListGroup.Item>
      );
    });
    if (alldata?.length > 3) {
      if (showAll) {
        return alldata;
      } else {
        let filtdata = alldata.pop();
        return filtdata;
      }
    } else {
      console.log("nooooo");
      return alldata;
    }
  };
  return (
    <div>
      <Card border="secondary" style={{ minHeight: 303 }}>
        <Card.Header style={{ height: 80 }}>
          <h3>Transaction History</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {dataHistory()}
            {historyData.length > 2 ? (
              !showAll ? (
                <button
                  className="btn text-end"
                  onClick={() => {
                    setShowAll(true);
                  }}
                >
                  {" "}
                  Show More...
                </button>
              ) : (
                <button
                  className="btn text-end"
                  onClick={() => {
                    setShowAll(false);
                  }}
                >
                  {" "}
                  Show Less...
                </button>
              )
            ) : null}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
