import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_CurrentId, Delete_Task } from "../../store";

export const Tasks = ({ contactId }) => {
  const Navigate = useNavigate();

  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Add_CurrentId(contactId));
  }, [contactId]);

  return (
    <>
      {tasks?.map((task) => {
        if (contactId === task.contactId)
          return (
            <div className="profile --card --flex-between" key={task.id}>
              <div className="desc">
                <ul>
                  <li>
                    <span className="font-weight-bold">CRM: </span>
                    {task.title}
                  </li>
                  <li>
                    <span className="font-weight-bold">Responsable: </span>
                    {task.author}
                  </li>
                  <li>
                    <span className="font-weight-bold"> vence: </span>
                    {task.deadline}
                  </li>
                </ul>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(Delete_Task(task.id))}
              >
                Borrar
              </button>
            </div>
          );
      })}
      <div className="--btn-buttoms">
        <button className="btn btn-outline-primary" onClick={() => Navigate("/addTask")}>
          Agregar Tarea
        </button>
      </div>
    </>
  );
};
