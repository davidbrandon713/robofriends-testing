import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it('expect to render Counter Button component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockColor='red'
    const wrapper = shallow(<CounterButton color={mockColor} />)

    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual('red');
})

it('shouldComponentUpdate()', () => {
    const mockColor = 'red'
    const mockNextState = { count: 1 }
    const wrapper = shallow(<CounterButton color={mockColor} />)
    expect(wrapper.instance().shouldComponentUpdate(mockNextState)).toBe(true);
})