import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './MainPage.css';

export class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={this.filterRobots()} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage;