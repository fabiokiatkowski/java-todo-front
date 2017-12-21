import React from 'react';

class AddTodo extends React.Component {
  state = {
    title:"",
    description:"",
    done:false
  }
  
  onChangeInputHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="panel panel-default formCard">
        <div className="panel-heading">Add new task</div>
        <div className="panel-body">
          <form className="navbar-form" onSubmit={(event) => this.props.onSubmitHanlder(event, this.state)}>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Title" 
                name="title"
                required
                value={this.state.titleText} 
                onChange={this.onChangeInputHandle.bind(this)}/>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Description" 
                name="description"
                value={this.state.descriptionText} 
                onChange={this.onChangeInputHandle.bind(this)}/>
              <button 
                type="submit" 
                style={{marginTop:"3px"}} 
                className="btn btn-default pull-right">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default AddTodo;
