import { render, screen } from '@testing-library/react';
import CardList from './CardList.component';

const mockFilteredMonsters = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'LGraham@test.com',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'EHowell@test.com',
  },
];

test('should render CardList Component', () => {
  render(<CardList monsters={mockFilteredMonsters} />);
  const componentLeanne = screen.getByText(/leanne/i);
  const componentErvin = screen.getByText(/ervin/i);
  expect(componentLeanne).toBeInTheDocument();
  expect(componentErvin).toBeInTheDocument();
});
