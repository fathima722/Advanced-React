import {render, screen} from '@testing-library/react';
import MapMethod from './MapMethod';

test("displays a list of item details", () => {
    render(<MapMethod/>);
    const listElement = screen.getByText("$32 - ABC");
    expect(listElement).toBeInTheDocument();
});