import React, { Component } from 'react';
import axios from 'axios';
class EditTodos extends Component {
    constructor(props) {
        super(props);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeResp = this.onChangeResp.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeCompl = this.onChangeCompl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description : '',
            todo_responsible : '',
            todo_priority : '',
            todo_completed : false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
             .then(response => {
                 this.setState({
                     todo_description : response.data.todo_description,
                     todo_responsible : response.data.todo_responsible,
                     todo_priority : response.data.todo_priority,
                     todo_completed : response.data.todo_completed
                 })
             })
    }

    onChangeDesc(e){
        this.setState({
            todo_description : e.target.value
        })
    }
    onChangeResp(e){
        this.setState({
            todo_responsible : e.target.value
        })
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority : e.target.value
        })
    }
    onChangeCompl(e) {
        this.setState({
            todo_completed : !this.state.todo_completed
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj ={
            todo_description : this.state.todo_description,
            todo_responsible : this.state.todo_responsible,
            todo_priority : this.state.todo_priority,
            todo_completed : this.state.todo_completed
        }
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id,obj)
        .then(response => console.log(response.data));

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Update TODO</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description : </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.todo_description}
                        onChange={this.onChangeDesc}/>
                    </div>
                    <div className="form-group">
                        <label>Responsible : </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.todo_responsible}
                        onChange={this.onChangeResp}/>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input type="radio"
                            namm="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={this.state.todo_priority==='Low'}
                            onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                            namm="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={this.state.todo_priority==='Medium'}
                            onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                            namm="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={this.state.todo_priority==='High'}
                            onChange={this.onChangeTodoPriority}/>
                            <label className="form-check-label">High</label>
                        </div>
                      </div>
                      <div className="form-check">
                          <input type="checkbox"
                          className="form-check-input"
                          id="completedCheckbox"
                          name="completedCheckbox"
                          onChange={this.onChangeCompl}
                          checked={this.state.todo_completed}
                          value={this.todo_completed}/>
                          <label className="form-check-label" htmlFor="completedCheckbox">
                              Completed
                              </label>   

                      </div><br/>
                      <div className="form-group">
                          <input type="submit"
                          value="Update Todo"
                          className="btn btn-primary" />
                      </div>
                </form>
            </div>
        );
    }
}

export default EditTodos;