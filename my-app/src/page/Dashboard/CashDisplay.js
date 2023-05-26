import React from "react";

export default function CashDisplay({ cash }) {
  return (
    <div className="cash">
      <p>${cash}</p>
    </div>
  );
}
