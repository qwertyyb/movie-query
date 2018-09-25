import React from 'react'
import Movies from '../../components/Movies'
import NavigationBar from '../../components/Navigation'
import Loading from '../../components/Spin'
import './index.less'
import {getTop250} from '../../utils/api'

export default class Top250 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      isLoadingMore: false,
      pager: {
        start: 0,
        count: 0,
        total: 0
      }
    }
  }
  async componentDidMount() {
    this.getList()
  }
  async getList() {
    let {start, count} = this.state.pager
    let res = await getTop250(start + count)
    let list = res.subjects.map((movie, index) => ({
      id: movie.id,
      title: `${res.start + index + 1}、${movie.title}`,
      rate: movie.rating.average,
      img: movie.images.large,
      date: movie.mainland_pubdate, // 大陆上映日期
    }))
    let updatedList = this.state.list.concat(list)
    this.setState({
      list: updatedList,
      showLoading: false,
      pager: {
        start: res.start,
        count: res.count,
        total: res.total
      },
      isLoadingMore: false
    })
  }
  ended() {
    let {start, count, total} = this.state.pager
    return start + count >= total
  }
  loadMore() {
    if(this.ended())
      return
    this.setState({isLoadingMore: true})
    this.getList()
  }
  render() {
    const { start, count, total } = this.state.pager
    let showLoading = this.state.list.length <= 0
    return (
      <div className="top250-page">
        <div className="navigation-wrapper">
          <NavigationBar title="豆瓣电影Top250" history={this.props.history}/>
        </div>
        <div className="movies-container">
          <Movies
            movies={this.state.list}
            showLoadMore={start + count < total}
            isLoadingMore={this.state.isLoadingMore}
            onLoadMore={()=>this.loadMore()}/>
          {showLoading && <Loading/>}
        </div>
      </div>
    )
  }

  
}
