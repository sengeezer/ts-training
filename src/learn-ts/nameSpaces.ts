namespace App {
  export function helloWorld (): string {
    return 'hello world!';
  }
}

App.helloWorld();

// Merging two
function doThing (): string {
  return 'thing thing';
}

namespace doThing {
  export function log (message: string): void {
    console.log(message);
  }
}

doThing.log('Pretty common use-case!');
