import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = (props) => {
  const { token } = useAuth();

  return (
    <>
      {token ? (
        <Route {...props} />
      ) : (
        <Navigate
          state={{
            from: props.path
          }}
          replace
          to="/login"
        />
      )}
    </>
  );
};
