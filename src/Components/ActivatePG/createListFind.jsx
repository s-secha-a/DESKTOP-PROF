
// export function CreateList(res) {
//     for (var i=0; i<res.length; i++) {
//         var div = document.createElement("div");
//         div.className = "studentCard"
//         div.innerHTML = res[i].uuidUser;
//         document.getElementById("AreaTemp").appendChild(div);
//     }
// }


import React from "react";

import { createRoot } from 'react-dom/client';
import { findByName } from "./showInfo";


const renderUserCards = (res) => {
  const userCards = res.map(user => 
    React.createElement(
      'div',
      {
        key: user.uuidUser,
        className: 'studentCard',
        onClick: () => findByName(user.uuidUser),
      },
      [React.createElement('img',
            {
                key: "photo-" + user.uuidUser,
                src: user.photo,
                className: "miniPhoto"
            }),
        React.createElement('p',
            {key:user.uuidUser},
        user.lastName + " " + user.firstName + " " + user.patronymic)
      ]
    )
  );

  const listContainer = React.createElement(
    'div',
    { 
      className: 'students-list',
    },
    ...userCards
  );

  const root = createRoot(document.getElementById("forList"));
  root.render(listContainer);
};

export default renderUserCards;