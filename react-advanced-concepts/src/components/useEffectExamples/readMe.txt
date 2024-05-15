# Rules of Hooks
-> Only call hooks from a react component function
-> only call hooks at the top level of a component
-> Call multiple state or effect hooks
-> Make multiple hook calls in the same sequence


useEffect hook: a built-in React hook best suited to perform side effects in your React components

In this reading you will be introduced to the correct usage of the dependency array and the different useEffect calls that can be used to separate different concerns. You will also learn how you can clean up resources and free up memory in your useEffect logic by returning a function.

The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.
In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change. 

//  This effect runs after every render since no second argument is provided.

/* useEffect(() => { 
   document.title = 'Cafe Barbara';
 }); */

 // To avoid the performance issues caused by the above, we must pass an array as a second parameter to useEffect.

 /* useEffect(() => { 
  document.title = `Cafe Barbara b${branch}`;
}, [branch]); // Only re-run the effect if branch changes */

/*  useEffect(() => { 
    fetch(`https://littlelemon/menu/${id}`) 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, [props.id]); */
  React doesn’t limit you in the number of effects your component can have. 

//  If your effect returns a function, React will run it when it’s time to clean up resources and free unused memory.
/*  useEffect(() => { 
    CafeBarbara.subscribeToMessages(props.chatId, () => setStatus('online')) 

    return () => { 
      setStatus('offline'); 
      CafeBarbara.unsubscribeFromMessages(props.chatId); 
    }; 
  }, []);   */ The return function here always executes when the component unmounts to free the resources. The second parameter is the dependency array here.
