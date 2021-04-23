import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });

    const handleChange= e=>{
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        //Aca le mando las propiedades que quiero que tenga al ingresar el input y ejecutar el onSubmit
       props.onSubmit({
            id: Math.floor(Math.random() * 10000), //id cualquiera hasta el 10.000
            text: input //lo que llega al todo
        });

       setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add todo
            </button>
          </>
        )}
      </form>
    );
  }
  
  export default TodoForm;