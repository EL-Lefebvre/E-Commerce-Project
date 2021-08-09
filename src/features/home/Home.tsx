import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { actionsStatus } from "../../enums/actionsStatus";
import { actions, seletors } from "./ItemsSlice";

const Home = () => {
  const { fetchAllItems } = actions;
  const { selectItems, selectStatus } = seletors;
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const status = useAppSelector(selectStatus);
  // const status = useAppSelector(selectStatus);
  // const [searchFor, setSearchFor] = React.useState("");
  const isLoading = status === actionsStatus.loading;
  const isFailure = status === actionsStatus.failed;
  const hasItems = selectItems.length > 0;

  console.log(items);
  useEffect(() => {
    dispatch(fetchAllItems());
    console.log(items);
  }, []);

  console.log(fetchAllItems);

  return (
    <>
      <h1>Items</h1>
      {isLoading && (
        <div className="alert alert-primary" role="alert">
          Loading...
        </div>
      )}

      <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {hasItems &&
          items.map((m) => (
            <li key={m.id} className="col">
              <div>
                <img src={m.image} className="card-img-top" alt={m.title} />
                <div className="card-body">
                  <div className="card-title">{m.title}</div>
                </div>
              </div>
            </li>
          ))}
      </ul>

      {isFailure && (
        <div className="alert alert-danger mt-5" role="alert">
          Could not find results
        </div>
      )}
    </>
  );
};

export default Home;
