import React from 'react';

import {fireEvent, render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('calls the onPress function when the user press the button', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = render(
      <Button title="button title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText('button title', {exact: false});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
