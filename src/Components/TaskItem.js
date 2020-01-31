import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="ui segment">

                <div className="ui left action input">
                    <button className="ui yellow labeled icon button">
                        <i className="circle outline icon"></i>
                        Open
                    </button>
                    <input type="text" defaultValue={this.props.taskDetail}></input>
                    <button className="ui labeled icon button">
                        <i className="trash alternate icon"></i>
                        Remove from Board
                    </button>
                </div>


            </div>
        )
    }
}

export default TaskItem;