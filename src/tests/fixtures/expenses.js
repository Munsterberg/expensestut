import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Water bill',
    note: '',
    amount: 185,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 20000,
    createdAt: moment(0).subtract(4, 'day').valueOf()
  },
  {
    id: '3',
    description: 'Credit Card ',
    note: '',
    amount: 4000,
    createdAt: moment(0).add(4, 'day').valueOf()
  }
];