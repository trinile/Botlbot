import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const statusLoading = (status) => (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status={status}
      style={style.refresh}
    />
  </div>
);

export default statusLoading;
