import { useState, useEffect, useCallback, useRef } from 'react';

const defaultHeader = { 'Content-Type': 'application/json' };

const fetchData = async ({ url, method = 'GET', body, headers }) => {
  const result = await window.fetch(url, {
    method,
    headers: { ...headers, ...defaultHeader },
    credentials: 'same-origin',
    ...(body
      ? {
          [method.toLowerCase() === 'get' ? 'params' : 'data']: JSON.stringify(body),
        }
      : null),
  });
  return result.data;
};

export default function useFetcher() {
  const unMount = useRef(false);
  const data = useRef({});
  const [result, setResult] = useState({});
  const [isLoading, setLoading] = useState(null);
  const updateResultAndLoading = async value => {
    if (!unMount.current) {
      setLoading(false);
      setResult(value);
      return value;
    }
    return {};
  };

  const fetcher = useCallback(async payLoad => {
    setLoading(true);

    try {
      data.current = await fetchData(payLoad);
    } catch (e) {
      console.error(e, payLoad); //eslint-disable-line
    }
    return updateResultAndLoading(data.current);
  }, []);

  const batchFetcher = useCallback(async payloads => {
    setLoading(true);

    try {
      data.current = await Promise.all(payloads.map(payload => fetchData(payload)));
    } catch (e) {
      console.error(e, payloads); //eslint-disable-line
    }
    return updateResultAndLoading(data.current);
  }, []);

  useEffect(
    () => () => {
      unMount.current = true;
    },
    [],
  );

  return {
    fetcher,
    batchFetcher,
    result,
    isLoading,
  };
}
