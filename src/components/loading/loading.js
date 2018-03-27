import React from 'react'
import './loading.less'

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-mask">
          <div className="loading-content">
            <div className="loading-icon">
              <div className="loader-inner line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="loading-text">正在加载</div>
          </div>
        </div>
      </div>
    )
  }
}