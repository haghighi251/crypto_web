import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from '../TableRow/TableRow';
import TableCell from './TableCell';

const mockProps = {
    id: 'test-table-cell',
    className: 'custom-table-cell',
    testId: 'test-table-cell',
};
describe('TableCell component unit tests', () => {
    it('should render TableCell component with required props', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell {...mockProps} />
                    </TableRow>
                </TableBody>
            </Table>,
        );
        waitFor(() => {
            const tableCellComponent = screen.getByTestId('test-table-cell');
            expect(tableCellComponent).toBeInTheDocument();
            expect(tableCellComponent).toHaveClass('custom-table-cell');
        });
    });
});
