import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Button, Modal } from 'nice-react';

const stories = storiesOf('Modal', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const context = select('Context', props.modalContexts, 'info');

    return <Modal context={ context }>
        <Modal.Header onClose={ () => alert('You clicked Close!') }>
            This is a modal dialog
        </Modal.Header>
        <Modal.Sub>
            A less important sub heading
        </Modal.Sub>
        <Modal.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dignissim sapien non orci lobortis interdum. Sed aliquam lacus 
            ut varius molestie. Pellentesque suscipit ligula nec ex vestibulum, 
            facilisis tristique purus sagittis. Morbi ullamcorper felis dolor, 
            quis ultrices orci interdum at. Sed quam ligula, ornare non metus 
            ullamcorper, posuere volutpat sem. Nunc eu fringilla ligula. 
            Phasellus eget maximus neque, hendrerit vestibulum justo.
        </Modal.Content>
        <Modal.Footer>
            <Button context="link">
                Help
            </Button>
            <Button context="primary" pullRight>
                Done
            </Button>
        </Modal.Footer>
    </Modal>;
});

stories.add('Viewport centered', () => {
    const tall = boolean('Tall dialog', false);
    const wide = boolean('Wide dialog', false);

    return <Modal context="info" viewportCenter tall={ tall } wide={ wide }>
        <Modal.Header onClose={ () => alert('You clicked Close!') }>
            This is a modal dialog
        </Modal.Header>
        <Modal.Sub>
            A less important sub heading
        </Modal.Sub>
        <Modal.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dignissim sapien non orci lobortis interdum. Sed aliquam lacus 
            ut varius molestie. Pellentesque suscipit ligula nec ex vestibulum, 
            facilisis tristique purus sagittis.
        </Modal.Content>
        <Modal.Footer>
            <Button context="link">
                Help
            </Button>
            <Button context="primary" pullRight>
                Done
            </Button>
        </Modal.Footer>
    </Modal>;
});

stories.add('Header only', () => (<Modal context="info">
        <Modal.Content>
            I only have a footer. Of course, you can also only have a header...
        </Modal.Content>
        <Modal.Footer>
            <Button context="link">
                Que?
            </Button>
            <Button context="primary" pullRight>
                I see
            </Button>
        </Modal.Footer>
    </Modal>
));
