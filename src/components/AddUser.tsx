import { useState } from "react";
import { useDispatch } from "react-redux";
import * as usersActions from "../redux/reducers/usersActions";
import { AppDispatch } from "../redux/store";

export default function AddUser() {
  const [firstName, setFirstName] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      usersActions.createUser({
        firstName,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Fisrt Name..."
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <button style={{ marginLeft: ".5rem" }} onClick={handleClick}>
        Add User
      </button>
    </div>
  );
}
