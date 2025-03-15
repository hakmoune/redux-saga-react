import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as usersActions from "../redux/reducers/usersActions";
import { AppDispatch, RootState } from "../redux/store";

export default function Users() {
  const dispatch: AppDispatch = useDispatch();
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
