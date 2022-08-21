import React, { useState } from 'react';

let filterBln = false;

const Filter = props => {
  const { filterChange } = props;
  const [close, Setclose] = useState(false);

  const closeFunc = filterBln => {
    Setclose(filterBln);
    console.log(close);
  };
  const myfun = () => {
    if (filterBln === true) {
      filterBln = false;
      Setclose(filterBln);
    } else {
      filterBln = true;
      Setclose(filterBln);
    }
    filterChange(filterBln);
  };
  return (
    <>
      <button
        type="button"
        onClick={myfun}
        className={filterBln ? 'close' : 'btn'}
      >
        {filterBln ? 'X' : '필터'}
      </button>
    </>
  );
};

export default Filter;
