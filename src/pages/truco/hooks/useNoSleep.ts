import { useEffect, useRef } from 'react';
import NoSleep from 'nosleep.js';

function useNoSleep() {
  const noSleep = useRef<NoSleep | null>(null);

  useEffect(() => {
    noSleep.current = new NoSleep();

    noSleep.current.enable();

    return () => {
      if (noSleep.current) {
        noSleep.current.disable();
      }
    };
  }, []);

  return noSleep.current;
}

export default useNoSleep;
