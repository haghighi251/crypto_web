import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from './TableBody';

// Describe block for TableBody component tests
describe('TableBody component', () => {
  // Test case 1: Renders the component with required props
  it('should render TableBody component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table-body',
      className: 'custom-table-body',
      testId: 'test-table-body',
    };

    // Act
    const { getByTestId } = render(
      <Table>
        <TableBody {...mockProps} />
      </Table>,
    );

    // Assert
    waitFor(() => {
      const tableBodyComponent = getByTestId('test-table-body');
      expect(tableBodyComponent).toBeInTheDocument();
      expect(tableBodyComponent).toHaveClass('custom-table-body');
    });
  });
});
