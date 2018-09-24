import React from 'react';
import { List } from 'immutable'
import { getIncomingList, getShowingList, getCurrentCity } from './utils/api'
import './index.less';
import { Provider } from './context'

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props)
    this.dispatch = this.dispatch.bind(this)
    this.commit = this.commit.bind(this)
    this.initState(this)
  }
  initState({ dispatch }) {
    dispatch('getCurrentCity')
  }
  state = {
    city: '加载中···',
    showLoading: false,
    loadMore: false,
    list: List([       // 显示电影的列表
      List([]),      // 正在上映的电影列表
      List([])      // 即将上映的电影列表
    ]),
    pager: List([        // 显示列表的页面控制，包括总数，和当前加载的数据统计
      {
        start: 0,
        count: 0
      },
      {
        start: 0,
        count: 0
      }
    ])
  }
  mutations = {
    updateShowLoadingStatus(state, status) {
      this.setState(() => ({
        showLoading: status
      }))
    },
    updateList(state, tabIndex, newList) {
      this.setState(() => ({
        list: state.list.set(tabIndex, newList),
      }))
    },
    updatePager(state, tabIndex, newPager) {
      this.setState(() => ({
        pager: this.state.pager.set(tabIndex, newPager),
      }))
    },
    updateState(state, newState) {
      this.setState(() => ({ ...newState }))
    },
    updateLoadMoreStatus(state, loadMore) {
      this.setState(() => ({
        loadMore
      }))
    },
    updateCurrentCity(state, city) {
      this.setState(() => ({
        city,
      }))
    }
  }
  commit (mutation, ...args) {
    console.log(mutation, this.state)
    this.mutations[mutation].call(this, this.state, ...args)
  }
  actions = {
    async getList({commit, state}, tabIndex = 0) {
      let {start: curStart, count: curCount} = state.pager.get(tabIndex)
      const newStart = curStart + curCount
      let res = {}
      if(tabIndex === 0) {
        res = await getShowingList(newStart)
      } else {
        res = await getIncomingList(newStart)
      }
      const { start, count, total, subjects } = res
      let list = subjects.map(movie => ({
        id: movie.id,
        title: movie.title,
        rate: movie.rating.average,
        img: movie.images.large,
        date: movie.mainland_pubdate, // 大陆上映日期
      }))
      let updatedList = state.list.get(tabIndex).concat(list)
      const pager = { start, count, total }
      commit('updateState', {
        showLoading: false,
        loadMore: false,
        list: state.list.set(tabIndex, updatedList),
        pager: state.pager.set(tabIndex, pager)
      })
    },
    async getCurrentCity({ commit }) {
      const { city } = await getCurrentCity()
      commit('updateCurrentCity', city)
    }
  }

  dispatch(action, ...args) {
    this.actions[action](this, ...args)
  }
  render () {
    return (
      <Provider value={{ ...this.state, dispatch: this.dispatch, commit: this.commit }}>
        {this.props.children}
      </Provider>
    )
  }
}