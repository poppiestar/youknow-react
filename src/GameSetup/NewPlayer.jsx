// @flow

import React, { Component } from 'react';

export type Props = {
  addPlayer: (name: string) => any
}

class NewPlayer extends Component {
  props: Props
  textInput: HTMLInputElement

  addPlayer: () => void

  constructor(props: Props): void {
      super(props);

      this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer (): void {
      const name = this.textInput.value;

      if (name !== '') {
          this.props.addPlayer(name);
          this.textInput.value = '';
      }
  }

  render () {
      return (
          <div>
              <input type="text" ref={(input: HTMLInputElement) => { this.textInput = input; }} />
              <button onClick={this.addPlayer}>Add</button>
          </div>
      );
  }
}

export default NewPlayer;
