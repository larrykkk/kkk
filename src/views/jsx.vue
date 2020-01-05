<script>
export default {
  name: "jsx",
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  methods: {
    log() {
      console.log(1);
    }
  },
  render() {
    const hText = `
        <h${this.id}>123</h${this.id}>
    `;
    return (
      <div>
        <button onClick={this.log}>btn</button>
        <div domPropsInnerHTML={hText}></div>
      </div>
    );
  }
};
</script>
