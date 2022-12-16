import { useState, useEffect } from 'react';

const useFormHook = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback({...values});
  };

// If you need to access a synthetic event inside an asynchronous callback function, event. persist() should be called to remove the current event from the pool. Otherwise, an irrelevant value from another event or a null value will be read inside the callback.

  const handleChange = (event) => {
    let name;
    let value;
    if(typeof(event) === 'object'){
      event.persist();
      name = event.target.name;
      value = event.target.value;
      // let { name, value } = event.target;
    } else {
      console.log('event----->', event)
      name = event;
      value = event;
    } if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({...values, [name]: value}));
  };

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };

};

export default useFormHook;