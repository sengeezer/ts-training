import { SocialNetwork } from './socialNetwork';

class App implements SocialNetwork {
  title = 'Smegheads';
  getUsers() {
    return [{
      // ducktyping
      name: 'Djon'
    }];
  }
}