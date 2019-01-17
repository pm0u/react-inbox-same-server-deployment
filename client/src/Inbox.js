import React, { Component } from 'react'
import Message from './Message'

class Inbox extends Component {

  renderMessages = () => {
    return this.props.messages.map((message,i) => {
      return (
        <Message changeProp={this.props.changeProp} key={message.id} onCheck={this.props.onCheck} {...message} />
      )
    })
  }

  render() {
    return (
      <>
      {this.renderMessages()}
      </>
    );
  }

}

export default Inbox
