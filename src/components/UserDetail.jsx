import React from "react";

import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const UserDetail = () => {
  const [tasks, setTasks] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    async function fetchMembers() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );

      const data = await response.json();

      setTasks(data);
    }
    fetchMembers();
  }, [userId]);

  return (
    <div id="userdetail" className="members-tasks-wrapper">
      <NavLink className="goBack" to="/">
        {" "}
        Homepage
      </NavLink>
      <div className="member">
        {tasks.map((task) => (
          <>
            <p className="user-id">Task nr: {task.id}</p>
            <p className="user-name">Title: {task.title}</p>
            <p className="user-name">
              {task.completed ? "Task is completed" : "Task is not completed"}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
