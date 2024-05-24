import { useRef } from 'react';
import { Subject } from 'rxjs';

export const useSubject = <T>() => useRef(new Subject<T>());
