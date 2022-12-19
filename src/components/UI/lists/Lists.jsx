import React from "react";
import { Li } from "../../styles/Styles";

const Lists = ({users, AreYouSure}) => {
  return (
    <ul>
      {users.map((user) => (
        <Li key={user.id} className={user.delete ? '' : 'removeAnimation'}  >
          <p>
            {user.name} ({user.age} years old)
          </p>
          <button onClick={() => AreYouSure(user.id, user.delete)}>Delete</button>
        </Li>
      ))}
    </ul>
  );
};

export default Lists;
