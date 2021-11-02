import firebase from "firebase/compat";
import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useContext } from "react";
import { Context } from "../../index";

export const Login: React.FC = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);

    return user;
  };

  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBBtn onClick={login} color="primary">
            Login
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
