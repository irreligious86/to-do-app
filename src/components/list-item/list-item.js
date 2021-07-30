import React from 'react';

const ListItem = (props) => {

    const {id, title, done, logDone, logDelete} = props;

    let mystyle = "list-group-item item";
    if (done) {
        mystyle += ' done';
    }

    return (
        <li className={mystyle}>
            {title}
            <div className="btns">
                <button
                    onClick={ () => logDone(id) }
                    type="button"
                    className="btn btn-outline-success"
                >
                    Done
                </button>
                <button
                    onClick={ () => logDelete(id) }
                    type="button"
                    className="btn btn-outline-danger ml10"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ListItem;