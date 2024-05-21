// import {fireEvent, render,screen} from '@testing-library/react';
// import Ratings from './Ratings';

// describe("Feedback Form", () => {
//     test('submit button is disabled if score is lower than 5 and there is no feedback', () => {
//         const handleSubmit = jest.fn();
//         render(<Ratings/>);
//         const rangeInput = screen.getByLabelText(/Score:/);
//         fireEvent.change(rangeInput, {target: {value: "3"}});

//         const submitButton = screen.getByRole("button");
//         fireEvent.click(submitButton);

//         expect(handleSubmit).toHaveBeenCalled();
//         expect(submitButton).toHaveAttribute("disabled");
//     })
// });