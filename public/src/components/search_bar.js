import React, {Component} from 'react';
/*
import React from 'react';
const Component = React.Component;
 */

/* 함수형 컴포넌트 */
/* const SearchBar = () => {
    return <input />; // React.createElement와 같은 형태로 변환
}; */

/* ES6 문법으로 IMPORT에서 {Component} 하게되면 extends 에서 React.를 삭제 */
/* import React, {Component} from 'react';
   ==> const Component = React.Component; 동일하다.

class SearchBar extends React.Component {
    render() {
        return <input />;
    }
}
 */

/* class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }
    onInputChange(event){
        console.log(event.target.value);
    }
} */

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};
    }
    render() {
        //return <input onChange={event => console.log(event.target.value)} />;
        //this.state.term = event.tartget.value BAD!!
        return (
            <div className="search-bar">
              {/*   <input onChange={event => this.setState({term: event.target.value})} /> */}
                {/* value of the input: {this.state.term} */}
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;