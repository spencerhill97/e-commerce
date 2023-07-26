import PropTypes from "prop-types";

function Button({ props }) {
  return (
    <button
      onClick={props.handleClick}
      className={`${props.bg} ${props.width} gap-x-2 rounded-md
                 py-2 align-middle capitalize shadow-md active:shadow-none`}
    >
      {props.name} {props.icon}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  bg: PropTypes.string,
  handleClick: PropTypes.func,
  name: PropTypes.string,
};

Button.defaultProp = {
  bg: "bg-gray-200",
  width: "w-[125px]",
};

export default Button;
