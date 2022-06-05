import { groupGuestsByRoom } from './groupGuestsByRoom';
import { Rooms, Groups } from './types';
import { GUESTS } from 'features/OccupancyOptimizator/constants/guests';

const cases: Array<[Rooms, Groups]> = [
  [
    {
      economy: 3,
      premium: 3
    },
    {
      economy: {
        occupiedRooms: 3,
        total: 167
      },
      premium: {
        occupiedRooms: 3,
        total: 738
      }
    }
  ],
  [
    {
      economy: 5,
      premium: 7
    },
    {
      economy: {
        occupiedRooms: 4,
        total: 189
      },
      premium: {
        occupiedRooms: 6,
        total: 1054
      }
    }
  ],
  [
    {
      economy: 7,
      premium: 2
    },
    {
      economy: {
        occupiedRooms: 4,
        total: 189
      },
      premium: {
        occupiedRooms: 2,
        total: 583
      }
    }
  ],
  [
    {
      economy: 1,
      premium: 7
    },
    {
      economy: {
        occupiedRooms: 1,
        total: 45
      },
      premium: {
        occupiedRooms: 7,
        total: 1153
      }
    }
  ]
];

describe('when groupGuestsByRoom called', () => {
  cases.forEach(([rooms, expected], index) => {
    it(`should return correct groups for case ${index + 1}`, () => {
      const result = groupGuestsByRoom(rooms, GUESTS);
      expect(result).toEqual(expected);
    });
  });
});
