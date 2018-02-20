import { SocialNetwork } from './socialNetwork';

import * as _ from 'lodash';

class App implements SocialNetwork {
  title = 'Smegheads';
  getUsers() {
    return [{
      // ducktyping
      name: 'Djon'
    }];
  }
}

console.log(_.isArray(new App().getUsers()));