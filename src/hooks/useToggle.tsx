import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return { toggle, setToggle, onToggle };
};

export default useToggle;
