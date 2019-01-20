import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY ='AIzaSyDzfCgEi64IpS2YL4OMJ5w7IPepqJj5Urc';

// create a new component. html를 생성해줌

/* const App = function() {
    return <div>hi</div>;
} */
/* const App = () => {
    return(
        <div>
        <SearchBar />
        </div>
        );
    } */
class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('react');

    }
    
    videoSearch(term){
        YTSearch ({key: API_KEY, term: term}, (videos) => {
            /*             this.setState({videos});
            this.setState({videos: videos}); ES6 = key와 value가 같으면 생략가능 */
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 200);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos}/>
            </div>
        );
    }
}

// 이 컴포넌트는 만든 html를 가지고 페이지에 반영한다. 
ReactDOM.render(<App />, document.querySelector(".container"));