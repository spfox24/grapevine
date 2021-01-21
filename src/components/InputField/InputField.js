import { useState, forwardRef, useImperativeHandle } from 'react';

import './InputField.css';

const InputField = forwardRef((props, ref) => {
    
    const [ inputState, setInputState ] = useState({
        active: (props.active && props.locked) || false,
        value: props.value ? props.value : "",
        error: props.error || "",
        label: props.placeholder || "Label",
        name: props.name,
    });

    function changeValue(evt) {
        const value = evt.target.value;

        setInputState({ ...inputState, value, error: "" });
        props.handleChange(inputState, value);
      }

    const { active, value, error, label } = inputState
    const { predicted, locked } = props;

    const fieldClassName = `field ${
        (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    useImperativeHandle(
        ref, 
        () => ({
            changeInputState() {
                setInputState({ ...inputState, value: "" });
            },
            populateEditField(value) {
                setInputState({ ...inputState, value: value });
            }
        }),
        )

    return (
        <div className={fieldClassName}>
            { active && value && predicted && predicted.includes(props.value) && (
                <p className="predicted">{predicted}</p>
            )}
            <input
                handleChange={props.handleChange}
                pattern={props.pattern}
                id={props.id}
                type={props.type}
                value={value}
                placeholder={label}
                onChange={changeValue}
                onFocus={() => !locked && setInputState({ ...inputState, active: true })}
                onBlur={() => !locked && setInputState({ ...inputState, active: false })}
            />
            <label htmlFor={props.id} className={error && "error"}>
                {error || label}
            </label>
        </div>
    );
});

export default InputField;