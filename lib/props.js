const contexts = ['default', 'brand', 'link', 'primary', 'accent', 'good', 'warning', 'bad'];
const sizes = ['small', 'medium', 'large'];
const positions = ['stacked', 'justified'];

const breadcrumbsSizes = ['small'];

const props = {
  contexts,
  sizes,
  buttonContexts: contexts,
  buttonSizes: sizes,
  buttonGroupPositions: positions,
  buttonGroupSizes: sizes.filter(p => p !== 'medium'),
  breadcrumbsSizes
};

module.exports = props;
