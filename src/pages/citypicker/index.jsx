import React from 'react'
import NavigationBar from '../../components/Navigation'
import { Consumer } from '../../context'
import { getCities } from '../../utils/api'
import './index.less'

class CityPickerPage extends React.Component {
  constructor(props) {
    super(props)
    this.filterChanged = this.filterChanged.bind(this)
    this.state = {
      cities: ['正在加载中···'],
      hotCities: ['北京', '杭州', '广州', '深圳', '上海', '成都'],
      locCity: '正在获取···',
      filter: ''
    }
  }

  async componentDidMount() {
    this.getCities()
  }

  async getCities() {
    const res = await getCities()
    let cities = []
    for(let key in res) {
      let city = res[key]
      if(!city.endsWith('省') && city !== '市辖区') {
        cities.push(res[key])
      }
    }
    cities.sort((a, b) => a[0].localeCompare(b[0], 'zh'))
    // 列表非常长，使用分段渲染
    this.renderCityList(cities, 30, true)
  }
  renderCityList(cities, count, clear = false) {
    const renderList = cities.splice(0, count)
    this.setState(({ cities }) => ({
      cities: clear ? renderList : cities.concat(renderList)
    }), () => {
      if(cities.length) {
        requestAnimationFrame(() => this.renderCityList(cities, 30))
      }
    })
  }
  filterChanged(e) {
    let filter = e.target.value
    this.setState({filter})
  }

  getFilteredCities() {
    let filteredCities = this.state.cities
    if(this.state.filter.trim()) {
      filteredCities = filteredCities.filter(city => city.indexOf(this.state.filter.trim()) !== -1)
    }
    return filteredCities
  }

  cityClick(city) {
    const { commit, history } = this.props
    commit('updateCurrentCity', city)
    history.push('/')
  }

  render() {
    const filteredCities = this.getFilteredCities()
    let cities = filteredCities.map((city, index) => <li onClick={()=>this.cityClick(city)} className="city-item" key={index}>{city}</li>)
    let hotCities = this.state.hotCities.map(city => <li onClick={()=>this.cityClick(city)} key={city} className="city-item hot">{city}</li>)
    return (
      <div className="city-picker-container">
        <NavigationBar title="选择城市" history={this.props.history}/>
        <div className="input-wrapper">
          <input value={this.state.filter} onChange={this.filterChanged} type="text" placeholder="请输入" className="city-input"/>
        </div>
        {!this.state.filter.trim() && <React.Fragment>
          <div className="city-wrapper">
            <h4 className="wrapper-title">定位/最近访问</h4>
            <p className="city-item">{this.props.city}</p>
          </div>
          <div className="city-wrapper">
            <h4 className="wrapper-title">热门城市</h4>
            <ul className="cities hot">
              {hotCities}
            </ul>
          </div>
          <div className="city-wrapper">
            <h4 className="wrapper-title">所有城市</h4>
            <ul className="cities">
              {cities}
            </ul>
          </div>
          </React.Fragment>}
          {this.state.filter.trim() && <React.Fragment>
            <div className="city-wrapper">
              <h4 className="wrapper-title">搜索结果</h4>
              <ul className="cities">
                {cities}
              </ul>  
            </div>
          </React.Fragment>}
      </div>
    )
  }
}

export default (props) => (
  <Consumer>
    {({ city, commit}) => (
      <CityPickerPage {...props} city={city} commit={commit}/>
    )}
  </Consumer>
)