const contexts = ['default', 'brand', 'link', 'primary', 'accent', 'good', 'warning', 'bad'];
const sizes = ['small', 'medium', 'large'];
const positions = ['stacked', 'justified'];
 
const props = {
    contexts,
    sizes,
    buttonContexts: contexts,
    buttonSizes: sizes,
    buttonGroupPositions: positions,
    buttonGroupSizes: sizes.filter(p => p !== 'medium'),
    dropdownItemContexts: ['info', 'good', 'warning', 'bad']
};

module.exports = props;
