import styles from './AddTodo.module.css';

function AddTodo() {
    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo here" className={styles.inputText}/>
                </div>
                <div className="col-4">
                    <input type="date" className={styles.inputText}/>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button">Add</button>
                </div>
            </div>
        </div>
    );
}


export default AddTodo;