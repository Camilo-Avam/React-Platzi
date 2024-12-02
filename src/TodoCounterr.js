import './TodoCounter.css'
export default function TodoCounterr({ completed, total }) {

    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    )
}
