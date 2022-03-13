import React from "react";

const List = ({ kisi }) => {
  return (
    <>
      {kisi.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Bugün {age} yaşında!</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
