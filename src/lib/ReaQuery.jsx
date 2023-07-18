import { useRef } from 'react';

class ReaQuery {
  constructor() {}

  document(init) {
    this.ref = useRef(null);
    return this.ref;
  }

  get(selector) {
    this.ref.current // .current ~ querySelectorAllでで取得した時の[0]

    return this.ref.current;
  } 

  DOM = {

  } // attr()関数やfirst()関数はここにぶち込む

  ref = !1;

}

export default ReaQuery;
