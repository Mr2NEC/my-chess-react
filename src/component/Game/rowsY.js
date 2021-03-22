import React from 'react';

export default (props) => {
  const { position, headers } = props;
  return(
    <div className={`chess-desk__header-y chess-desk__header-y__p-${position}`}>
      {headers.map(digit => (<div key={`${position}${digit}`} className="chess-desk__header__letter">{digit}</div>))}
    </div>
  );
}
