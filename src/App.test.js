import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue"});
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
});

test("button turns blue when clicked", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue"});
  
  //click button
  fireEvent.click(colorButton);

  //expect the button color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //expect the button text to be Change to red
  expect(colorButton.textContent).toBe("Change to red");
})