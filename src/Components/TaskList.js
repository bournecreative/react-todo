import React from 'react';
import TaskItem from './TaskItem'

const TaskList = (props) => {
    return (
        <div className="ui segments">
            {props.tasks.map((task, index) =>
                <TaskItem key={index} taskDetail={task}></TaskItem>
            )}
        </div>
    )
}

export default TaskList;