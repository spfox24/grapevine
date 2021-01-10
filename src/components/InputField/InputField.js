import { useState } from 'react';
import { render } from 'react-dom';
import { TransitionMotion, spring } from 'react-motion';
import './InputField.css';

function InputField (props) {
    
    const [ inputState, setInputState ] = useState({
        active: (props.active && props.locked) || false,
        value: props.value || "",
        error: props.error || "",
        label: props.placeholder || "Label",
        name: props.name,
    });

    function changeValue(evt) {
        const value = evt.target.value;

        setInputState({ ...inputState, value, error: "" });
        props.handleChange(inputState, value);
      }
    
      function handleKeyPress(evt) {
          if(evt.which === 13) {
              setInputState({ ...inputState, value: props.predicted });
          }
      }

    const { active, value, error, label } = inputState
    const { predicted, locked } = props;

    const fieldClassName = `field ${
        (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
        <div className={fieldClassName}>
            { active && value && predicted && predicted.includes(props.value) && (
                <p className="predicted">{predicted}</p>
            )}
            <input
                id={props.id}
                type={props.type}
                value={value}
                placeholder={label}
                onChange={changeValue}
                handleKeyPress={handleKeyPress}
                onFocus={() => !locked && setInputState({ ...inputState, active: true })}
                onBlur={() => !locked && setInputState({ ...inputState, active: false })}
            />
            <label htmlFor={props.id} className={error && "error"}>
                {error || label}
            </label>
        </div>
    );
};

export default InputField;