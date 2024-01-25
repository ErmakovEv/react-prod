import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SidebarBlock';

describe('Sidebar', () => {
  test('test render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId('button-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });
});
