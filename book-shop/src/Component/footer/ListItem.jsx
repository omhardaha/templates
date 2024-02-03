import React from 'react';

function ListItem({ text, link }) {
  return (
    <li className="py-2 ">
      <a href={link}>{text}</a>
    </li>
  );
}

export default ListItem;
