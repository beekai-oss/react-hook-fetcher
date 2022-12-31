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

## By the makers of BEEKAI

We also make [BEEKAI](https://www.beekai.com/). Build the next-generation forms with modern technology and best in class user experience and accessibility.
