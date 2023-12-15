import React from 'react';
import jhon from '../images/jhon-doe.jpg';
import { userContext, colorContext } from './Context';
console.log(userContext);

function ContentData() {
  return (
    <userContext.Consumer>
      {user => {
        console.log(user);
        return (
          <colorContext.Consumer>
            {color => {
              return (
                <div className="card" style={{ backgroundColor: color }}>
                  <div className="card-body">
                    <img className="img-thumbnail" src={jhon} alt="Jhon Doe" />
                    <h2 className="card-title">The Hero</h2>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Name : </strong> {user.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Age : </strong> {user.age} years
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }}
          </colorContext.Consumer>
        );
      }}
    </userContext.Consumer>
  );
}

export default ContentData;
