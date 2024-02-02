import React from "react";

const ListItem = ({ text, link }) => {
    return (
        <li className="py-2 ">
            <a href={link}>{text}</a>
        </li>
    );
};

export default ListItem;
