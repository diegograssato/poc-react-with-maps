import './App.css';
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
   setCount(count + 1);
   if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "token", message: "your message" , data: count}));
   }
  };
  
  const handleClickZero = () => {
   setCount(0);
   if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "token", message: "your message" , data: 0}));
   }
  };
  return (
    <div className="App">
      <header className="App-header">
         
        <div>
         <button type="button" onClick={handleClick}>
          Click Me
        </button>

        <button type="button" onClick={handleClickZero}>
         Zerar
        </button>

        {count}
      </div>
      </header>
    </div>
  );
}

export default App;
