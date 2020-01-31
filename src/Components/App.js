import React from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

class App extends React.Component {
    state = { tasks: [] }

    taskListing = () => {
        if (this.state.tasks.length === 0) {
            return <div className="ui large header">No Tasks! Go for a bike ride</div>
        } else {
            return <TaskList tasks={this.state.tasks}></TaskList>
        }
    }

    taskEntry = (task) => {
        const tasks = [...this.state.tasks]
        tasks.push(task)
        this.setState({ tasks })
        console.log(this.state.tasks)
    }

    render() {
        return (
            <div className="ui center aligned container">
                <div className="ui segments">
                    <div className="ui segment">
                        <TaskInput onSubmit={this.taskEntry}></TaskInput>
                    </div>
                </div>
                <div className="ui container">
                    {this.taskListing()}
                </div>

            </div>
        )
    }
}

export default App;