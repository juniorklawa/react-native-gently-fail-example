import {useEffect} from 'react';

const ComponentWithError = () => {
  useEffect(() => {
    throw new Error('This is a test error thrown by ComponentWithError.');
  }, []);

  return null;
};

export default ComponentWithError;
