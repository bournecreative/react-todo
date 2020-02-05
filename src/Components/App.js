import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';


class App extends React.Component {
    state = { tasks: [] }
    taskListing = () => {
        if (this.state.tasks.length < 1) {
            return <div className="ui large header">No Tasks! Go for a bike ride</div>
        } else {
            return <TaskList tasks={this.state.tasks} onDelete={this.handleDelete} onSelection={this.handleSelection}></TaskList>
        }
    }
    taskEntry = (task) => {
        const tasks = [...this.state.tasks]
        const id = tasks.length;
        tasks.push({ id: id, status: 'open', task: task })
        this.setState({ tasks })
    }

    handleSelection = (task) => {
        console.log(task)
        const tasks = [...this.state.tasks]
        const index = tasks.indexOf(task)
        console.log(index)
        tasks[index].status === 'open' ? tasks[index].status = 'closed' : tasks[index].status = 'open'
        this.setState({ tasks: tasks })
    }

    handleDelete = (task) => {
        const tasks = this.state.tasks.filter(t => t.id !== task.id)
        this.setState({ tasks: tasks })
    }

    render() {
        return (
            <div className="ui center aligned container">
                <div className="ui segments">
                    <div className="ui segment">
                        <TaskInput onSubmit={this.taskEntry}></TaskInput>
                        {this.taskListing()}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;