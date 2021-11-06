import { useEffect } from 'react';

function useTimer(callback, intervalTime) {
  useEffect(() => { // Recebe uma callback e um array
    const interval = setInterval(() => {
      callback();
    }, intervalTime);

    return (() => { // return = componentWillUnmount
      clearInterval(interval);
    });
  }, []);
}

// useEffect(() => {}); => componentDidUpdate
// useEffect(() => {}, []); => componentDidMount
// useEffect(() => { return () => {} }, []); => componentWillUnmount
// useEffect(() => {}, [var1, var2]); => componentDidUpdate
export default useTimer;
