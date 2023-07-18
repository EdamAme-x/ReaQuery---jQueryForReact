class ReaQuery {
  constructor() {
    this.ref = null;
  }

  document(ref) {
    if (ref && ref.current) {
      this.ref = ref.current;
    } else {
      console.error('Invalid ref passed to ReaQuery document method.');
    }
  }

  get(selector) {
    if (!this.ref) {
      console.error('No valid DOM reference set in ReaQuery.');
      return [];
    }

    const parser = new DOMParser();
    const ans = parser.parseFromString(this.ref.innerHTML, 'text/html');

    return ans.querySelectorAll(selector);
  }
}

export default ReaQuery;
