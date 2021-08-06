export const ClearButton = ({callback}) => {
    return (
        <div>
            <button className="history__btn" onClick={callback}>Clear History</button>
        </div>
    )
}