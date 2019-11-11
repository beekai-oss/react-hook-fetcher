# react-hook-fetcher
React simple fetch API hook

## Intall
    $ npm install react-hook-fetcher

## Example

```
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
