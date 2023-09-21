import React from 'react'

const Button = ({
    label,
    size,
    color
}) => {

    const setSize = () => {
        switch (size) {
            case 'sm':
                return 'px-10 py-2';
            case 'lg':
                return 'px-20 py-4';
        }
    }

    const setColor = () => {
        switch (color) {
            case 'green':
                return 'bg-green';
            case 'red':
                return 'bg-red';
            case 'gradient':
                return 'gradient';
        }
    }

    return (
        <button className={`${setColor()} ${setSize()} uppercase text-white-200 tracking-widest text-base rounded-full`}>
            {label}
        </button >
    )
}

Button.defaultProps = {
    label: 'Default Label',
    size: 'sm',
    color: 'red'
}

export default Button