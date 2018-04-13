import React, { Component } from 'react';
import {Map, List} from 'immutable'
import './index.less';
import Movies from '../../components/movies/movies'
import TabBar from '../../components/tabbar/tabbar'
import Loading from '../../components/loading/loading'
import SearchPanel from '../../components/searchpanel/searchpanel'
import {getShowingList, getIncomingList} from '../../utils/api'

/* global sessionStorage */
class App extends Component {
  constructor(props) {
    super(props)

    this.onTabChange = this.onTabChange.bind(this)
    this.loadMore = this.loadMore.bind(this)

    this.state = {
      curTab: 'showing',  // 当前正显示的标签
      showLoading: true,  // 是否显示正在加载组件
      isLoadingMore: false,  // 是否正在加载更多
      list: Map({         // 显示电影的列表
        showing: List([]),      // 正在上映的电影列表
        incoming: List([])      // 即将上映的电影列表
      }),
      pager: Map({        // 显示列表的页面控制，包括总数，和当前加载的数据统计
        showing: {
          start: 0,
          count: 0
        },
        incoming: {
          start: 0,
          count: 0
        }
      })
    }
  }
  componentDidMount() {
    this.getList()
  }
  
  componentWillMount() {
    console.log('will Mount')
  }
  componentWillUnmount() {
    sessionStorage.setItem('scollTop', window.scrollY)
  }

  /**
   * 当标签被点击时触发
   * 若当前标签中的内容为空，则显示正在加载组件并加载内容
   * 
   * @param {any} tab 
   * @memberof App
   */
  onTabChange(tab) {
    if(tab === 'searching') {
      this.setState({
        curTab: tab
      })
      return
    }
    if(!this.state.list.get(tab).count()) {
      this.getList(tab)
    }
    this.setState({
      curTab: tab,
      showLoading: this.state.list.get(tab).count() <= 0
    })
  }

  /**
   * 获取正在显示的类型的电影列表
   * 
   * @param {string} [type='showing'] 
   * @memberof App
   */
  async getList(type = 'showing') {
    let pager = this.state.pager.get(type)
    let {start, count} = pager
    if(type === 'showing') {
      var res = await getShowingList(start + count)
    } else {
      res = await getIncomingList(start + count)
    }
    let list = res.subjects.map(movie => ({
      id: movie.id,
      title: movie.title,
      rate: movie.rating.average,
      img: movie.images.large,
      date: movie.mainland_pubdate, // 大陆上映日期
    }))
    let updatedList = this.state.list.get(type).concat(list)
    this.setState({
      list: this.state.list.set(type, updatedList),
      showLoading: false,
      pager: this.state.pager.set(type, {
        start: res.start,
        count: res.count,
        total: res.total
      }),
      isLoadingMore: false
    }, () => {
      let scrollTop = sessionStorage.getItem('scollTop') || 0
      window.scrollTo(0, scrollTop)
    })
  }

  canLoad() {
    let curTab = this.state.curTab
    let pager = this.state.pager.get(curTab)
    console.log(pager)
    return pager.start + pager.count <= pager.total
  }

  loadMore() {
    let curTab = this.state.curTab
    if(this.canLoad()) {
      this.setState({isLoadingMore: true})
      this.getList(curTab)
    }
  }
  getShowMovies() {
    let curList = this.state.list.get(this.state.curTab)
    let {start, count, total} = this.state.pager.get(this.state.curTab)
    let ended = start + count >= total
    return (
      <React.Fragment>
        <Movies
          movies={curList}
          isLoadingMore={this.state.isLoadingMore}
          ended={ended}
          onLoadMore={this.loadMore}/>
        {this.state.showLoading && <Loading/>}
      </React.Fragment>
    )
  }
  render() {
    return (
      <div className="index">
        {this.state.curTab !== 'searching' && <div className="tab-panel">
          {this.getShowMovies()}
        </div>}
        {this.state.curTab === 'searching' && <div className="tab-panel search-wrapper">
          <SearchPanel/>
        </div>}
        <div className="tab-wrapper">
          <TabBar onTabChange={this.onTabChange} curTab={this.state.curTab}/>
        </div>
      </div>
    );
  }
}

export default App;
