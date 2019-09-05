import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
        <div class="container">
        <h2>按钮元素</h2>
        <a href="#" className="btn btn-info" role="button">链接按钮</a>
        <button type="button" className="btn btn-info">按钮</button>
        <input type="button" className="btn btn-info" value="输入框按钮"/>
        <input type="submit" className="btn btn-info" value="提交按钮" /> 
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;