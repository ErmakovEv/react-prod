import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/RenderWithRouter';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    render(<ComponentRender><Sidebar /></ComponentRender>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    render(<ComponentRender><Sidebar /></ComponentRender>);
    const toggleBtn = screen.getByTestId('button-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });
});
