import React from 'react'
import {getCities, getMyCity} from '../../utils/api'
import './index.less'

export default class CityPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      hotCities: ['北京', '杭州', '广州', '深圳', '上海', '成都'],
      locCity: ''
    }
  }

  async componentDidMount() {
    this.getCities()
    this.getMyCity()
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
    this.setState({
      cities
    })
  }
  async getMyCity() {
    let res = await getMyCity()
    this.setState({
      locCity: res.city
    })
  }

  render() {
    let cities = this.state.cities.map((city, index) => <li className="city-item" key={index}>{city}</li>)
    let hotCities = this.state.hotCities.map(city => <li key={city} className="city-item hot">{city}</li>)
    return (
      <div className="city-picker-container">
        <div className="input-wrapper">
          <input type="text" placeholder="请输入" className="city-input"/>
        </div>
        <div className="hot-city-wrapper">
          <h4 className="wrapper-title">热门城市</h4>
          <p className="city-item">{this.state.locCity}</p>
        </div>
        <div className="hot-city-wrapper">
          <h4 className="wrapper-title">热门城市</h4>
          <ul className="cities hot">
            {hotCities}
          </ul>
        </div>
        <div className="all-city-wrapper">
          <h4 className="wrapper-title">所有城市</h4>
          <ul className="cities">
            {cities}
          </ul>
        </div>
      </div>
    )
  }
}