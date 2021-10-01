import React from "react";
import styled from "styled-components";

const Comp = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

function Challenge7component({ icon, label, number }) {
  return (
    <Comp>
      <div>
        <span>{icon}</span>
        <strong> {label}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </Comp>
  );
};
  
export default Challenge7component;