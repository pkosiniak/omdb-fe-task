import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs';

export const useSubject = <T>() => useRef(new Subject<T>());

export const useDerivedState = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(initialState);
  const prevState = useRef<S>(state);

  useEffect(() => {
    const next = initialState instanceof Function ? initialState() : initialState;
    if (prevState.current !== next) setState(initialState);
    prevState.current = next;
  }, [initialState]);

  return [state, setState];
};
