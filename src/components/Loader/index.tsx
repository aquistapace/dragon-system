import React from 'react';

import { PagePosition, LoaderContainer, Spinner } from './styles';

const Loader: React.FC = () => {
  return (
    <PagePosition>
      <LoaderContainer>
        <Spinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Spinner>
      </LoaderContainer>
    </PagePosition>
  );
};

export default Loader;
