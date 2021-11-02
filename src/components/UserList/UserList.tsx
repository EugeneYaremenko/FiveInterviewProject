import React from "react";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import defaultAvatar from "../../img/defaultAvatar.jpg";
import { MDBBtn } from "mdb-react-ui-kit";
import styles from "./userList.module.css";

import Loader from "react-loader-spinner";
import { notify } from "../../services/notify";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.users);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Loader type="ThreeDots" color="#3F51B5" width="80" height="80" />;
  }

  if (error) {
    notify(error.toString(), "error");
  }

  return (
    <div>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userListItem}>
            <div className={styles.userListItemImg}>
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <img src={defaultAvatar} alt={user.name} />
              )}
            </div>
            <div className={styles.userListItemInfo}>
              <span>
                <b>Name:</b> {user.name}
              </span>
              <span>
                <b>Username:</b> {user.username}
              </span>
              <span>
                <b>City:</b> {user.address.city}
              </span>
              <span>
                <b>Phone:</b> {user.phone}
              </span>
              <span>
                <b>Website:</b> {user.website}
              </span>
              <span>
                <b>Email:</b> {user.email}
              </span>

              <MDBBtn className={styles.MDBBtn} color="primary">
                More info...
              </MDBBtn>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
