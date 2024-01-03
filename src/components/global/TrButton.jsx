const TrButton = ({
    onClick,
    label,

}) => {
    return(
        <button
            onClick={onClick}
            className="
                w-full
                h-fit
                text-lg
                p-4
                border
                border-primary
                text-primary
                font-bold
                hover:bg-primary
                hover:text-white
                 rounded-full
                 transition-all
                 duration-300
            "
        >
            {label}
        </button>
    )
}
export default TrButton