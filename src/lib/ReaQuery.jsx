import { useRef } from 'react';

class ReaQuery {
  constructor() {}

  document(init) {
    this.ref = useRef(null);
    return this.ref;
  }

  get(selector) {
    this.ref.current // .current ~ querySelectorAllでで取得した時の[0]

    const parser = new DOMParser();
    const ans = parser.parseFromString(this.ref.innerHTML, 'text/html');

    this.DOM = ans;

    return this.DOM.querySelectorAll(selector);
  } 

  DOM = {

  } // attr()関数やfirst()関数はここにぶち込む

  ref = !1;

}

export default ReaQuery;
