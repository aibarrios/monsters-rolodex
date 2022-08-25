import { render, screen } from '@testing-library/react';
import Card from './Card.component';

const mockMonster = {
  id: '8',
  name: 'Alex',
  email: 'alex@test.com',
};

test('should render Card Component', () => {
  render(<Card key={mockMonster.id} monster={mockMonster} />);
  const name = screen.getByText('Alex');
  const email = screen.getByText('alex@test.com');
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
