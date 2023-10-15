const Button = ({
    label,
    color
}) => {

    return (
        <button className={`bg-${color} uppercase text-white-200 tracking-wider rounded-full px-10 py-2 md:px-15 md:py-3 xl:px-20 xl:py-4`}>
            {label}
        </button >
    )
}

Button.defaultProps = {
    label: 'Default Label',
    color: 'red'
}

export default Button