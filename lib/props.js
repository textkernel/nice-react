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
    breadcrumbsSizes,
    buttonContexts: contexts,
    buttonSizes: sizes,
    buttonGroupPositions: positions,
    buttonGroupSizes: sizes.filter(p => p !== 'medium'),
    cardContexts: contexts.filter(c => ['default', 'link'].indexOf(c) === -1),
    codeContexts: ['brand', 'good', 'warning', 'bad'],
    codeSizes: ['restrain-s', 'restrain-m', 'restrain-l', 'restrain-max'],
    dropdownItemContexts: ['info', 'good', 'warning', 'bad'],
    modalContexts: contexts.filter(c => ['default', 'link'].indexOf(c) === -1),
    headerMenuContexts: contexts.filter(x => ['default', 'link'].indexOf(x) === -1),
    headerMenuWidths: ['125', '150', '175', '200'],
    paginationSizes: ['small', 'large'],
    popoverContexts: ['info', 'good', 'warning', 'bad'],
    popoverPositions: ['top', 'bottom', 'left', 'right', 'center'],
    tagContexts: ['primary', 'accent', 'muted', 'info', 'good', 'warning', 'bad']
};

module.exports = props;
