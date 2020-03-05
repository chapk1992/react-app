import React from "react";
import con from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = props => {
  return (
    <div className={con.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={con.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={con.message}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogs = [
    { id: "1", name: "Yaroslav" },
    { id: "2", name: "Roma" },
    { id: "3", name: "Misha" },
    { id: "4", name: "Nastya" },
    { id: "5", name: "Oleg" }
  ];

  let messages = [
    { id: "1", message: "Hi!" },
    { id: "2", message: "I am fine.How are you?" },
    { id: "3", message: "Yo!" }
  ];

  let dialogsElements = dialogs.map(d => {
    return <Dialog name={d.name} id={d.id} />;
  });

  let messageElements = messages.map(
    m => {
      return (
        <Message message={m.message} id={m.id} />
      )
    }
  )

  return (
    <div className={con.dialogs}>
      <div className={con.dialogsItem}>
       {dialogsElements}
      </div>
      <div className={con.messages}>
       {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
