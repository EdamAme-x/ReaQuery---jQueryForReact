import { useRef } from 'react';

class $ {
  
  constructor () {

  }

  document(init) {
    this.ref = useRef(null);
    return this.ref;
  }
}

export default $;