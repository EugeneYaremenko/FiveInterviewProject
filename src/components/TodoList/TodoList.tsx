import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./todoList.module.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import Loader from "react-loader-spinner";
import { notify } from "../../services/notify";

const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todos
  );

  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <Loader type="ThreeDots" color="#3F51B5" width="80" height="80" />;
  }

  if (error) {
    notify(error.toString(), "error");
  }

  return (
    <>
      <div className={styles.todos}>
        <ul className={styles.todosList}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <MDBCard>
                <MDBCardBody className={styles.MDBCard}>
                  <MDBCardText>
                    {todo.id}. {todo.title}
                  </MDBCardText>
                  <MDBBtn className={styles.MDBBtn} color="primary">
                    <MDBIcon icon="magic" className="mr-1" /> Edit
                  </MDBBtn>
                  <label>
                    <input type="checkbox" />
                    Completed
                  </label>
                </MDBCardBody>
              </MDBCard>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pagi}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            className={p === page ? styles.pagItemActive : styles.pagItem}
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
