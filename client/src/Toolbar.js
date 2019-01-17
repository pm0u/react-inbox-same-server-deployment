import React, { Component } from 'react'

class Toolbar extends Component {

  makeUnread = () => {
    if (this.props.countUnread() > 0) {
      return (
        <>
        <p className="pull-right">
          <span className="badge badge">{this.props.countUnread()}</span>
          unread messages
        </p>
        </>
      )
    }
  }
  disableButtons = () => {
    return {...(!this.props.messages.some(message => message.selected) && {disabled:'disabled'})}
  }

  changeSelectIcon = () => {
    if (this.props.messages.every(message => message.selected)) {
      return 'fa-check-square-o'
    } else if (this.props.messages.some(message => message.selected)) {
      return 'fa-minus-square-o'
    } else {
      return 'fa-square-o'
    }
  }

  render() {
    return ( <
      >
      <div className="row toolbar">
        <div className="col-md-12">

          <a className="btn btn-danger" onClick={this.props.toggleCompose}>
            <i className={`fa ${this.props.compose? 'fa-minus' : 'fa-plus'}`}></i>
          </a>
          <button className="btn btn-default" onClick={this.props.toggleAllSelect} >
            <i className={`fa ${this.changeSelectIcon()}`}></i>
          </button>
          {this.makeUnread()}

          <button className="btn btn-default" {...this.disableButtons()} id='read' onClick={this.props.changeReadState}>Mark As Read</button>

          <button className="btn btn-default" {...this.disableButtons()} id='unread' onClick={this.props.changeReadState}>Mark As Unread</button>

          <select onChange={this.props.addLabel} className="form-control label-select" {...this.disableButtons()} >
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select onChange={this.props.removeLabel} className="form-control label-select" {...this.disableButtons()} >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button onClick={this.props.delMsg} className="btn btn-default" {...this.disableButtons()} >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div> <
      />
    )
  }

}

export default Toolbar
