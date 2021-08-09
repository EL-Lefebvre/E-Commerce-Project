import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { actionsStatus } from "../../enums/actionsStatus";
import { actions, seletors } from "./ItemsSlice";

const Home = () => {
  const { fetchAllItems } = seletors;
  const dispatch = useAppDispatch();
  const items = useAppSelector(fetchAllItems);
  // const status = useAppSelector(selectStatus);
  // const [searchFor, setSearchFor] = React.useState("");
  // const isLoading = status === actionsStatus.loading;
  // const isFailure = status === actionsStatus.failed;
  const hasItems = fetchAllItems.length > 0;

  console.log(fetchAllItems);
  useEffect(() => {
    // dispatch(fetchAllItems);
    console.log(items);
  }, [dispatch]);

  console.log(items);

  return (
    <>
      <h1>Items</h1>

      {items && (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          {items &&
            items.map((m) => (
              <div key={m.id} className="col">
                <div className="card h-100">
                  <img src={m.image} className="card-img-top" alt={m.title} />
                  <div className="card-body">
                    <div className="card-title">{m.title}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* {isFailure && (
        <div className="alert alert-danger mt-5" role="alert">
          Could not find results for "{searchFor}"
        </div>
      )} */}
    </>
  );
};

export default Home;
