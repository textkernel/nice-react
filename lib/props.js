const contexts = ['default', 'brand', 'link', 'primary', 'accent', 'good', 'warning', 'bad'];
const sizes = ['small', 'medium', 'large'];
const positions = ['stacked', 'justified'];
const products = ['textkernel', 'extract', 'harvester', 'jobfeed', 'match', 'search', 'sourcebox', 'wte', 'tkportal', 'connector'];
 
const props = {
    products,
    contexts,
    sizes,
    textColors: contexts.filter(c => c !== 'default').map(context => (`text-color-${ context }`)),
    buttonContexts: contexts,
    buttonSizes: sizes,
    buttonGroupPositions: positions,
    buttonGroupSizes: sizes.filter(p => p !== 'medium'),
    dropdownItemContexts: ['info', 'good', 'warning', 'bad'],
};

module.exports = props;
