# react-hook-fetcher
React simple fetcher hook

Example:

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
