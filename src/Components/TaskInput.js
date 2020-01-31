import React from 'react';

class TaskInput extends React.Component {
    state = { term: " " }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
        this.setState({ term: " " })
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} type="text" placeholder="Todo..."></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskInput;