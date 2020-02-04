import React from 'react';

class TaskItem extends React.Component {

    setClasses = (arg) => {
        const classes = {
            open: {
                button: "ui olive labeled icon button",
                icon: "circle outline icon"
            },
            closed: {
                button: "ui grey labeled icon button",
                icon: "check icon"
            }
        }

        if (this.props.taskInfo.status === 'closed') {
            return classes.closed[arg]
        }
        else {
            return classes.open[arg]
        }
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui left action input">
                    <button onClick={() => { this.props.onSelection(this.props.taskInfo) }} className={this.setClasses("button")}>
                        <i className={this.setClasses("icon")}></i>
                        {this.props.taskInfo.status}
                    </button>
                    <input type="text" defaultValue={this.props.taskInfo.task}></input>
                    <button onClick={() => { this.props.onDelete(this.props.taskInfo) }} className="ui labeled icon button">
                        <i className="trash alternate icon"></i>
                        Remove from Board
                    </button>

                </div>


            </div>
        )
    }
}

export default TaskItem;