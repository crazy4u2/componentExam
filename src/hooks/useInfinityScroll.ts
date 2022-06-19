import { useCallback, useEffect, useRef, useState } from 'react';

interface Props extends IntersectionObserverInit {
  onIntersect: () => void;
}

export function useInfinityScroll({ root = null, rootMargin = '0px', threshold = 0.5, onIntersect }: Props) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    console.log('실행');
    onIntersect();
  };

  useEffect(() => {
    const node = measureRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measureRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return measureRef;
}

// export function useInfinityScroll({ root = null, rootMargin = '0px', threshold = 0.5, onIntersect }: Props) {
//   const measureRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (measureRef && measureRef.current) {
//       const intersectionobserver = new IntersectionObserver(
//         ([entry]) => {
//           console.log('실행');
//           if (entry.isIntersecting) onIntersect();
//         },
//         { root, rootMargin, threshold }
//       );

//       intersectionobserver.observe(measureRef.current);
//       return () => intersectionobserver.disconnect();
//     }
//   }, [measureRef, onIntersect, root, rootMargin, threshold]);

//   return measureRef;
// }
