import React from 'react';
import PropTypes from 'prop-types';

import './TextField.css';

type InputType = 'text' | 'number' | 'email';

export interface TextFieldProps {
    /**
     * disabled input
     */
    disabled?: boolean,
    /**
     * textfield text display
     */
    text?: string,
    /**
     * textfield type [text | number |email]
     */
    inputType?: InputType,
    /**
     * textfield field label
     */
    label?: string,
    /**
     * textfield field placeholder
     */
    placeholder?: string,
    /**
     * textfield field error if any
     */
    error?: string,
    /**
     * textfield value alignment
     */
    align?: string,
    /**
     * textfield handle change callback
     */
    onChange?: (value: string) => void,
    /**
     * textfield enter key down callback
     */
    onEnterKeyDown?: () => void
    /**
     * textfield clear action callback
     */
    handleClear?: () => void
};

const TextField: React.FC<TextFieldProps> = ({
    disabled,
    text,
    inputType,
    label,
    placeholder,
    error,
    align,
    onChange,
    onEnterKeyDown,
    handleClear
}) => {
    function _handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        if (value === '' && handleClear) {
            handleClear();
        }
        if (onChange) {
            onChange(value)
        }
    }

    function _handledKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            if (onEnterKeyDown) {
                onEnterKeyDown();
            }
        }
    }

    return (
        <div className="text-field-wrapper">
            {label && <label className="text-field__label">{label}</label>}
            <input
                data-testid="text-field"
                className={`text-field__input ${align ? `text-field-${align}` : ''}`}
                disabled={disabled}
                value={text}
                type={inputType}
                placeholder={placeholder}
                onChange={_handleChange}
                onKeyPress={_handledKeyDown} />

            {error && <span className="text-field__error-msg">{error}</span>}
        </div>
    );
};

TextField.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string,
    label: PropTypes.string,
    inputType: PropTypes.oneOf<InputType>(['text', 'email', 'number']),
    placeholder: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};


TextField.defaultProps = {
    disabled: false,
    text: '',
    inputType: 'text',
    placeholder: 'Enter text here ...'
};

export default TextField;