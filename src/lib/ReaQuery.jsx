import { useRef, useEffect } from 'react';

class ReaQuery {
  constructor() {
    this.ref = null;
  }

  Set(ref) {
    if (ref && ref.current) {
      this.ref = ref.current; // refの中身をthisのrefに
    } else {
      console.error('Invalid ref passed to ReaQuery document method.');
    }
  }

  Get(selector) {
    if (!this.ref) {
      console.error('No valid DOM reference set in ReaQuery.');
      return [];
    }

    const parser = new DOMParser();
    const ans = parser.parseFromString(this.ref.innerHTML, 'text/html');

    return ans.querySelectorAll(selector);
  }

  Ref() {
    return useRef(null);
  }
}

export default ReaQuery;
