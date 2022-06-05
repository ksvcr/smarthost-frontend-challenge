export type Guest = number;

export type RoomType = 'economy' | 'premium';

export type Group = {
  occupiedRooms: number;
  total: number;
};

export type Groups = Record<RoomType, Group>;

export type Rooms = Record<RoomType, number>;
