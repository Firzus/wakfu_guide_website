import React from 'react'

const Button = ({
    label,
    color
}) => {

    return (
        <button className={`bg-${color} px-10 py-2 md:px-15 md:py-3 xl:px-20 xl:py-4 uppercase text-white-200 tracking-wider text-base rounded-full`}>
            {label}
        </button >
    )
}

Button.defaultProps = {
    label: 'Default Label',
    color: 'red'
}

export default Button