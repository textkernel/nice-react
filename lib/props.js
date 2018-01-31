const contexts = ['default', 'brand', 'link', 'primary', 'accent', 'info', 'good', 'warning', 'bad'];
const sizes = ['small', 'medium', 'large'];
const positions = ['stacked', 'justified'];
const products = ['textkernel', 'extract', 'harvester', 'jobfeed', 'match', 'search', 'sourcebox', 'wte', 'tkportal', 'connector'];
const breadcrumbsSizes = ['small'];

const props = {
    products,
    contexts,
    sizes,
    textColors: contexts.filter(c => c !== 'default').map(context => (`text-color-${ context }`)),
    alertContexts: ['info', 'good', 'warning', 'bad'],
    alertPositions: ['top', 'bottom', 'left', 'right', 'center'],
    buttonContexts: contexts,
    buttonSizes: sizes,
    buttonGroupPositions: positions,
    buttonGroupSizes: sizes.filter(p => p !== 'medium'),
    dropdownItemContexts: ['info', 'good', 'warning', 'bad'],
    breadcrumbsSizes,
    modalContexts: contexts.filter(c => ['default', 'link'].indexOf(c) === -1),
    paginationSizes: ['small', 'large']
};

module.exports = props;
