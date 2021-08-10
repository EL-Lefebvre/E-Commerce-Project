import { database } from "faker/locale/en_AU";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { actionsStatus } from "../../enums/actionsStatus";
import { itemsList } from "./ItemsApi";
import { actions, seletors } from "./ItemsSlice";
interface arrayOfItems {
  [index: number]: itemsList;
}

const Home = () => {
  const { fetchAllItems } = actions;
  const { selectItems, selectStatus } = seletors;
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectItems);
  const status = useAppSelector(selectStatus);
  const [items, setItems] = useState(data as itemsList[]);
  const isLoaded = status === actionsStatus.idle;
  const isLoading = status === actionsStatus.loading;
  const isFailure = status === actionsStatus.failed;
  const hasItems = selectItems.length > 0;

  useEffect(() => {
    dispatch(fetchAllItems());
    setItems(data);
  }, []);

  return (
    <>
      <h1>Items</h1>
      {isLoading && (
        <div className="alert alert-primary" role="alert">
          Loading...
        </div>
      )}

      <div>
        {hasItems && isLoaded && (
          <div>
            {items.map((m) => (
              <div key={m.id} className="col">
                <div>
                  <img
                    src={m.image}
                    style={{ height: "200px", width: "200px" }}
                    alt={m.title}
                  />
                  <div className="card-body">
                    <div className="card-title">{m.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isFailure && (
        <div className="alert alert-danger mt-5" role="alert">
          Could not find results
        </div>
      )}
    </>
  );
};

export default Home;
