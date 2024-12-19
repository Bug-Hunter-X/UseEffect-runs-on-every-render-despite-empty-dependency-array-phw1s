```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running!');
    // Cleanup function
    return () => {
      console.log('Cleanup function running!');
    };
  }, []); // <-- Empty dependency array means this runs only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```