

export default function Btn({title, style}){
    return(
        <>
            <button className={style}>
                <span className='text-white text-[0.875rem] xl:text-[1rem]'>{title}</span>
            </button>
        </>
    )
}