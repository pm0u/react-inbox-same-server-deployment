import React, { Component } from 'react'

class Message extends Component {

  renderLabels = () => {
    if (this.props.labels.length > 0) {
      return this.props.labels.map((label,i) => {
        return (<span key={i} className="label label-warning">{label}</span>)
      })
    }
  }

  render() {
    return (
      <>
        <div  className={`row message ${this.props.read? 'read' : 'unread'} ${this.props.selected? 'selected' : ''}`}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" id={this.props.id} data-fieldtype='selected' checked={`${this.props.selected? 'checked': ''}`} onChange={this.props.changeProp}/>
              </div>
              <div className="col-xs-2">
                <i id={this.props.id} data-fieldtype='starred' onClick={this.props.changeProp} className={`star fa ${this.props.starred? 'fa-star' : 'fa-star-o'}`}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {this.renderLabels()}
            <a href="#">
            {this.props.subject}
            </a>
          </div>
        </div>
      </>
    )
  }

}

export default Message
