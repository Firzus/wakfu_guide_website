const Button = ({
    label,
    color
}) => {
    const bgColor = () => {
        switch (color) {
            case 'red':
                return "bg-red"
            case 'green':
                return "bg-green"
            case 'gradient':
                return "bg-gradient"
            default:
                return "bg-gradient"
        }
    }

    return (
        <button className={`${bgColor()} uppercase text-white-200 tracking-wider leading-none rounded-full px-10 py-2 md:px-15 md:py-3 xl:px-20 xl:py-4`}>
            {label}
        </button >
    )
}

Button.defaultProps = {
    label: 'default label'
}

export default Button