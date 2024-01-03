import {useEffect,  useState } from "react"

const SliderButton = ({ data, validation }) => {
    const [position, setposition] = useState(0)
    const [defaultdata, setdefault] = useState(data[0])

    let checkdata = (e, index) => {
        setposition(index)
        setdefault(e)
    }

    useEffect(() => {
        validation(defaultdata)
    }, [defaultdata])

    return (
        <div className="flex max-w-[16rem] items-center">
            <div
                className={`flex items-center bg-slate-100 h-[3rem] w-[80%] sm:w-full rounded-full overflow-x-hidden relative justify-around`}
            >
                {data.map((e, index) => {
                    return (
                        <span
                            key={index}
                            onClick={() => checkdata(e, index)}
                            className={`bg-transparent z-10  text-accent w-[8rem] flex items-center justify-center font-semibold cursor-pointer ${
                                position == index ? "text-white" : ""
                            }`}
                        >
                            {e}
                        </span>
                    )
                })}
                <span
                    className={`absolute w-[48%] rounded-full bg-primary duration-200 z-0 h-[90%] jusify-center flex items-center transition-all custom_translate${position}`}
                ></span>
            </div>
        </div>
    )
}

export default SliderButton