import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Expenseitem = ({ expense }) => {
  const { id, charge, amount } = expense;
  console.log(id)
  return (
    <div>
      <li className="item">
        <div className="info">
          {/* <span >{id}</span> */}
          <span className="expense">{charge}</span>
          <span className="amount">{amount}</span>
        </div>
        <div>
          <button className="edit-btn" aria-label="edit button">
            <MdEdit />
          </button>
          <button className="clear-btn" aria-label="delete button">
            <MdDelete />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Expenseitem;
