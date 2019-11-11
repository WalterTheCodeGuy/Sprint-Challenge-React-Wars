import React from "react";
import styled from "styled-components";

const Card = styled.div`
              background-image: linear-gradient(to bottom right, dodgerblue, navy);
              color: darkorange;
              h3 {
                color: tomato;
              }
              p {
                color: tomato;
              }
              width: 300px;
              height: 300px;
              border: 5px ridge deepskyblue;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              margin: 20px;
`;

const CharacterCard = props => {
  return (
    <Card>
      <h1>{props.getName}</h1>
      <h3>Born - {props.getBirth}</h3>
      <div className="text">
        <p>Hair Color: {props.getHair}</p>
        <p>Eyes: {props.getEyes}</p>
        <p>Height: {props.getHeight}</p>
        <p>Gender: {props.getGender}</p>
      </div>
    </Card>
  );
};

export default CharacterCard;