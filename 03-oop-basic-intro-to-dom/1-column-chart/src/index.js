export default class ColumnChart {
  constructor({ data, label, value, link = '#', ...rest }) {
    this.chartHeight = 50;
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;

    console.error('rest', rest);

    this.element = this.render();
    this.update = this.update();


    this.rest = rest;
  }

  update() {
  }

  getLink() {
    let link = '';
    if (this.label === 'orders') {
      link = `<a class="column-chart__link" href="${this.link}">View all</a>`;
    }
    return link;
  }

  getSum() {
    let sum = this.value.toLocaleString();
    console.log(this.rest);
    if (this.rest) {
      let { formatHeading } = this.rest;
      return formatHeading(sum);
    }
    return sum;
  }

  getColumns() {
    let columns = '';
    if (this.data.length !== 0) {
      const maxValue = Math.max(...this.data);
      for (let column of this.data) {
        const value = Math.floor((column / maxValue) * this.chartHeight);
        const percent = ((column / maxValue) * 100).toFixed(0);
        columns += `<div style="--value: ${value}" data-tooltip="${percent}%"></div>`;
      }
    }
    return columns;
  }

  isEmptyData() {
    let data = '';
    if (this.data.length === 0) {
      data = 'column-chart_loading';
    }
    return data;
  }

  get template() {

    return `
		<div class="column-chart ${this.isEmptyData()}" style="--chart-height: 50">
			<div class="column-chart__title">
				Total ${this.label}
				${this.getLink()}
			</div>
			<div class="column-chart__container">
				<div data-element="header" class="column-chart__header">
				${this.getSum()}
				</div>
				<div data-element="body" class="column-chart__chart">
				${this.getColumns()}
				</div>
			</div>
		</div > `;
  }
  render() {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    return wrapper.firstElementChild;
  }
}
