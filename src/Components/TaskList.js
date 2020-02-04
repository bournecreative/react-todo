import React from 'react';
import TaskItem from './TaskItem'

const TaskList = (props) => {
    return (
        <div className="ui segments">
            {props.tasks.map(task => {
                return <TaskItem
                    key={task.id}
                    taskInfo={task}
                    onDelete={props.onDelete}
                    onSelection={props.onSelection}></TaskItem>
            })}
        </div>
    )
}

export default TaskList;