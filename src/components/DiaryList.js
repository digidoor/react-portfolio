const DiaryList = ({entries, title, deleter}) => {
    return (
        <div className="diary-list">
            <h1>{ title }:</h1>
            {entries.map(entry => (
                <div className="diary-preview" key={entry.id}>
                    <h2>{ entry.title }</h2>
                    <h5>Writen by { entry.author }</h5>
                    <p>{ entry.body }</p>
                </div>
            ))}
        </div>
    );
}
 
export default DiaryList;