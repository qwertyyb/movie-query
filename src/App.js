import React, { Component } from 'react';
import {Map, List} from 'immutable'
import './App.css';
import Movies from './views/movies/movies'
import TabBar from './components/tabbar/tabbar'
import Loading from './components/loading/loading'

import {getShowingList, getIncomingList} from './utils/api'

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
  componentWillMount() {
    this.getList()
  }

  /**
   * 当标签被点击时触发
   * 若当前标签中的内容为空，则显示正在加载组件并加载内容
   * 
   * @param {any} tab 
   * @memberof App
   */
  onTabChange(tab) {
    console.log(this.state.list.get(tab).count())
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

  render() {
    let curList = this.state.list.get(this.state.curTab)
    let {start, count, total} = this.state.pager.get(this.state.curTab)
    console.log(start, count, total)
    let ended = start + count >= total
    let loadText = this.state.isLoadingMore ? '正在加载' : '加载更多'
    return (
      <div className="App">
        <div className="movie-wrapper">
          <Movies movies={curList}/>
          {!ended && <button className="load-btn"
            disabled={this.state.isLoadingMore}
            onClick={this.loadMore}>{loadText}</button>}
          {this.state.showLoading && <Loading/>}
        </div>
        <div className="tab-wrapper">
          <TabBar onTabChange={this.onTabChange} curTab={this.state.curTab}/>
        </div>
      </div>
    );
  }
}

export default App;
