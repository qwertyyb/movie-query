import React from 'react'

export default class DetailItem extends React.Component {
  render() {
    let contentClass = "detail-item__content " + (this.props.className ? this.props.className : "")
    return (
      <div className="detail-item">
        <h3 className="detail-item__title">{this.props.title}</h3>
        <div className={contentClass}>{this.props.children}</div>
      </div>
    )
  }
}