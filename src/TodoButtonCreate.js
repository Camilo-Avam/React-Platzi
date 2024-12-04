import './TodoButtonCreate.css'
export default function TodoButtonCreate() {
    return (
        <button
            className="CreateTodoButton"
            onClick={() => console.log('click')}

        >
            +
        </button>
    )
}
