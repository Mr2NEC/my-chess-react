import React from 'react';

export default (props) => {
  const { position, headers } = props;
  return(
    <div className={`chess-desk__header-x chess-desk__header-x__p-${position}`}>
        {headers.map(letter => (<div key={`${position}${letter}`} className="chess-desk__header__letter">{letter.toUpperCase()}</div>))}
    </div>
  );
}
