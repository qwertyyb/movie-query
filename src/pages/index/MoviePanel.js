import React, { Component } from 'react'
import qs from 'query-string'
import './index.less';
import Movies from '../../components/Movies'
import Loading from '../../components/Spin'
import CityBar from '../../components/CityBar'
import { Consumer } from '../../context'

const navTabs = [
  { text: '正在上映' },
  { text: '即将上映' }
]


/* global sessionStorage */
class Index extends Component {
  constructor(props) {
    super(props)
    this.onTabClick = this.onTabClick.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.state = {
      tabIndex: 0
    }
  }
  static getDerivedStateFromProps(props) {
    return {
      tabIndex: +qs.parse(props.location.search).tab || 0
    }
  }
  componentDidMount() {
    console.log(this.state.tabIndex)
    const { list, dispatch, commit } = this.props
    const { tabIndex } = this.state  
    if (!list.get(tabIndex).size) {
      commit('updateShowLoadingStatus', true)
      dispatch('getList', tabIndex)
    } else {
      window.scrollTo(0, +sessionStorage.getItem('scrollTop'))
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.location !== this.props.location) {
      const { list, commit } = this.props
      const { tabIndex } = this.state
      if (!list.get(tabIndex).size) {
        commit('updateShowLoadingStatus', true)
        this.props.dispatch('getList', tabIndex)
      }
    }
  }

  componentWillUnmount() {
    console.log(window.scrollY)
    sessionStorage.setItem('scrollTop', window.scrollY)
  }

  /**
   * 当标签被点击时触发
   * 若当前标签中的内容为空，则显示正在加载组件并加载内容
   * 
   * @param {any} tab 
   * @memberof App
   */
  onTabClick(tab, index) {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: qs.stringify({ tab: index })
    })
  }

  canLoad() {
    const { tabIndex } = this.state
    let pager = this.props.pager.get(tabIndex)
    return pager.start + pager.count <= pager.total
  }

  loadMore() {
    const { tabIndex } = this.state
    if(this.canLoad()) {
      this.props.commit('updateLoadMoreStatus', true)
      this.props.dispatch('getList', tabIndex)
    }
  }
  getShowMovies() {
    const { list, pager, loadMore } = this.props
    const { tabIndex } = this.state
    let curList = list.get(tabIndex)
    let {start, count, total} = pager.get(0)
    return (
      <React.Fragment>
        {this.props.showLoading ?
          <Loading/>
          : 
          <Movies
            movies={curList}
            isLoadingMore={loadMore}
            showLoadMore={start + count < total}
            onLoadMore={this.loadMore}/>}
      </React.Fragment>
    )
  }
  render() {
    const { tabIndex } = this.state
    return (
        <div className="tab-panel" style={{paddingTop: '40px'}}>
          <CityBar city={this.props.city} tabs={navTabs} curTabIndex={tabIndex} onTabClick={this.onTabClick} />
          {this.getShowMovies()}
        </div>
    );
  }
}

export default (props) => {
  return (
    <Consumer>
      {state => {
        const newProps = { ...props, ...state }
        return <Index {...newProps} />
      }}
    </Consumer>
  )
}
