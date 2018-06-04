import React from 'react';
import Card from '../../lib/Card';

const onClick = () => {};

describe('<Card />', () => {
    it('should render default Card without subs', () => {
        const wrapper = shallow(<Card
            title="This is a card"
            controls={ [{
                label: 'OK',
                className: 'icon fa-check',
                onClick
            }, {
                label: 'Dismiss',
                disabled: true,
                onClick
            }] }
            image="//placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97150&w=300&h=150"
            style={{
                float: 'none',
                width: '300px'
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ullamcorper nulla ac quam hendrerit pharetra.
        </Card>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Card with subs, without controls', () => {
        const wrapper = shallow(<Card
            title="This is a card with subs"
            context="brand"
            style={{
                float: 'none',
                width: '300px'
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ullamcorper nulla ac quam hendrerit pharetra.
            <Card.Sub className="icon fa-reply">
                In semper vel lectus sed finibus. Donec in erat risus. 
                Aenean in lectus massa. Phasellus id malesuada arcu, vel ultricies enim.
            </Card.Sub>
            <Card.Sub className="icon fa-reply">
                    In semper vel lectus sed finibus. Donec in erat risus. 
                    Aenean in lectus massa. Phasellus id malesuada arcu, vel ultricies enim.
            </Card.Sub>
        </Card>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Card with custom classnames/styles', () => {
        const wrapper = shallow(
            <Card
                title="This is a card with subs"
                context="brand"
                className="my-classname"
                style={{
                    float: 'none',
                    width: '300px'
                }}
                controls={ [{
                    label: 'OK',
                    className: 'icon fa-check',
                    style: { color: 'green' },
                    onClick
                }]}
            >
                <Card.Content className="content-classname" style={{ color: 'red' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    ullamcorper nulla ac quam hendrerit pharetra.
                </Card.Content>

                <Card.Sub className="icon fa-reply" style={{ backgroundColor: 'blue' }}>
                    In semper vel lectus sed finibus. Donec in erat risus.
                    Aenean in lectus massa. Phasellus id malesuada arcu, vel ultricies enim.
                </Card.Sub>
            </Card>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
