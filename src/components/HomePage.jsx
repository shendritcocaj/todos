import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// this is a tedt branch
const HomePage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      console.log(data);
      setMembers(data);
    }
    fetchMembers();
  }, []);
  return (
    <div className="container">
      <h1 className="title">Club Members</h1>
      <div className="card-wrapper">
        {members.map((member) => (
          <div key={member.id} className="members-wrapper">
            <div className="member">
              <p className="user-name">name-: {member.name}</p>
              <p className="user-username">Id: {member.id} </p>{" "}
              <NavLink to={`/user/${member.id}`} className="show-comments">
                {" "}
                {member.name} Tasks
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
