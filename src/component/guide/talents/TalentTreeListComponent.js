import React from 'react';

function TalentTreeListComponent({ data, indexes }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((pic, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: "column", alignItems: "center", margin: "10px" }} className='hover'>
          <h6 style={{ color: indexes.includes(index) ? 'red' : 'white' }}>{index}</h6>
          <img src={pic} alt={index} style={{ animationDelay: `${index * 0.1}s` }} width="60px" />
        </div>
      ))}
    </div>
  );
}

export default TalentTreeListComponent;
