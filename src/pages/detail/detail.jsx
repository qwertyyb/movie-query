import React from 'react'
import './detail.less'
import {getMovieInfo} from '../../utils/api'
import Loading from '../../components/loading/loading'
import TopHeader from './top-header'
import DetailItem from './detail-item'
import NavigationBar from '../../components/navigation/navigation'

const defaultAvatar = 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.toggleFull = this.toggleFull.bind(this)

    this.state = {
      isLoading: true,
      fullSummary: false,
      movieInfo: {}
    }
  }
  componentDidMount() {
    this.getDetail(this.props.match.params.id)
  }
  async getDetail(id) {
    let res = await getMovieInfo(id)
    this.setState({
      movieInfo: res,
      isLoading: false
    })
  }
  toggleFull(type) {
    this.setState((prev) => ({['full' + type]: !prev['full' + type]}))
  }
  render() {
    if (!this.state.movieInfo.title) {
      return (
        <div className="detail-page">
          <div className="navigation-wrapper">
            <NavigationBar title="正在加载"/>
          </div>
          <div className="detail-content">
            {this.state.isLoading && <Loading />}
          </div>
        </div>
      )
    }
    let movieInfo = this.state.movieInfo
    let thumb = movieInfo.images.large
    let type = movieInfo.genres.join('/')
    let time = movieInfo.durations.join('/')
    let language = movieInfo.languages.join('/')
    let rate = movieInfo.rating.average
    let date = movieInfo.pubdates.join('/')
    let actors = movieInfo.casts
    let directors = movieInfo.directors
    return (
      <div className="detail-page">
        <div className="navigation-wrapper">
          <NavigationBar title={movieInfo.title} history={this.props.history} />
        </div>
        <div className="detail-content">
          {this.state.isLoading && <Loading />}
          <TopHeader thumb={thumb} title={movieInfo.title} type={type} time={time} language={language} rate={rate} date={date}/>
          <div className="detail-wrapper">
            <DetailItem title="剧情梗概">
              <p className={"summary-content " + (this.state.fullSummary?'full':'')}>{movieInfo.summary}</p>
              <button onClick={()=>this.toggleFull('Summary')} 
                className="detail-item__btn">{this.state.fullSummary?'隐藏更多':'显示更多'}</button>
            </DetailItem>
            <DetailItem title="影人" className="card-content">
              {directors.map(actor => (
                <div key={actor.id} className="card">
                  <img src={actor.avatars ? actor.avatars.large : defaultAvatar} alt={actor.name} className="card-img"/>
                  <h4 className="card-title">{actor.name}</h4>
                  <p className="card-sub-title">导演</p>
                </div>))}
                {actors.map(actor => (
                <div key={actor.id} className="card">
                  <img src={actor.avatars ? actor.avatars.large : defaultAvatar} alt={actor.name} className="card-img"/>
                  <h4 className="card-title">{actor.name}</h4>
                  <p className="card-sub-title">演员</p>
                </div>))}
            </DetailItem>
            <DetailItem title="预告片" className="card-content">
              {movieInfo.trailers.map(trailer => (
                <div key={trailer.id} className="card video">
                  <video
                    controls
                    src={trailer.resource_url} title={trailer.title}
                    poster={trailer.medium}
                    className="card-video"/>
                  <h4 className="card-title">{trailer.title}</h4>
                </div>
              ))}
            </DetailItem>
            <DetailItem title="剧照" className="card-content">
              {movieInfo.photos.map(photo => (
                  <div key={photo.id} className="card">
                    <img src={photo.cover} alt={photo.alt} className="card-img"/>
                  </div>
                ))}
            </DetailItem>
          </div>
        </div>
      </div> 
    )
  }
}