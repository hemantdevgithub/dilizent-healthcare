const Button = ({
    label,
    bg,
}) => {
    return(
        <button
            className={`
                rounded-lg
                w-fit
                h-full
                font-Public
                flex
                justify-center
                items-center
                font-thin
                transition-all
                duration-300
                p-3
                ${bg === 'white' ? 'hover:text-white text-black bg-white hover:bg-primary' 
                : 'hover:text-black bg-primary text-white hover:bg-white'}
            `}
        >
            {label}
        </button>
    )
}
export default Button