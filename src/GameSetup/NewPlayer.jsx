// @flow

import React, { Component } from 'react';
import type { Element } from 'react';

type NewPlayerPropTypes = {
  addPlayer: (name: string) => any
}

class NewPlayer extends Component {
  props: NewPlayerPropTypes
  textInput: HTMLInputElement

  addPlayer: () => void

  constructor(props: NewPlayerPropTypes): void {
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

  render (): Element<any> {
      return (
          <div>
              <input type="text" ref={(input: HTMLInputElement) => { this.textInput = input; }} />
              <button onClick={this.addPlayer}>Add</button>
          </div>
      );
  }
}

export default NewPlayer;
