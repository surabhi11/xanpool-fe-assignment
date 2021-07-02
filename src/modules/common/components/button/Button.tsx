import PropTypes from 'prop-types';
import "./Button.css";

export interface ButtonProps {
    /**
      * button is disabled or not
      */
    label: string;
    /**
      * button type
      */
    type?: "primary" | "secondary" | "error";
    /**
     * Whether the button is disabled or not
     */
    disabled?: boolean;
    /**
     * The callback handler for button
     */
    onClick: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    type,
    disabled = false,
    onClick,
}) => {
    return (
        <button
            disabled={disabled}
            className={`custom-button custom-button--${type}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * button is disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * button type
     */
    type: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * button label display
     */
    label: PropTypes.string.isRequired,
    /**
     * callback function to handle click
     */
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    disabled: false,
    type: 'primary'
};

export default Button;