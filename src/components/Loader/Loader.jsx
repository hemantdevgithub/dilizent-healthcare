import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
    return(
        <div 
        className="
            flex
            fixed
            inset-0
            bg-white
            h-full
            place-content-center
            justify-center
            items-center
        ">
             <HashLoader
                 color={'blue'}
                 loading={true}
                 aria-label="Loading Spinner"
                 data-testid="HashLoader"
                 size={60}
             />
        </div>
    )
}
export default Loader