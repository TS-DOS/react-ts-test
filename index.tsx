import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <ion-header translucent="true" collapse="fade">
  <ion-toolbar>
    <ion-title>Title</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  ...
</ion-content>

<ion-footer translucent="true" collapse="fade">
  <ion-toolbar>
    <ion-title>Footer</ion-title>
  </ion-toolbar>
</ion-footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
