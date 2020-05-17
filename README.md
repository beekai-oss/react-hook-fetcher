# React Hook Fetcher
Simple React hook for the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

## Intall
    $ npm install react-hook-fetcher

## Example

```jsx
function App() {
  const {
    fetcher,
    result,
    isLoading,
  } = useFetcher();

  useEffect(() => {
   fetcher('http://http://google.com.au/')
  }, []);

  return <div>{isLoading ? 'Loading...' : result}</div>;
}
```
