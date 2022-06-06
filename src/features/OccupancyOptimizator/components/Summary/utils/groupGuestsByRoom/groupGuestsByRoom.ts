import { Guest, RoomType, Rooms, Groups } from 'features/OccupancyOptimizator/types';

const PREMIUM_LIMIT = 100;

const addGuest = (guest: Guest, groups: Groups, roomType: RoomType) => {
  groups[roomType].occupiedRooms += 1;
  groups[roomType].total += guest;
};

export const groupGuestsByRoom = (rooms: Rooms, guests: Guest[]): Groups => {
  const groups: Groups = {
    economy: { occupiedRooms: 0, total: 0 },
    premium: { occupiedRooms: 0, total: 0 }
  };
  const sortedGuests = [...guests].sort((a, b) => b - a);

  let economyStartIndex = sortedGuests.length;

  for (let i = 0; i < sortedGuests.length; i++) {
    const guest = sortedGuests[i];
    const isPremiumGuest = guest >= PREMIUM_LIMIT;
    const hasEmptyPremiumRoom = groups.premium.occupiedRooms < rooms.premium;

    if (isPremiumGuest && hasEmptyPremiumRoom) {
      addGuest(guest, groups, 'premium');

      continue;
    }

    if (guest < PREMIUM_LIMIT) {
      economyStartIndex = i;

      break;
    }
  }

  while (true) {
    const economyGuestsLength = sortedGuests.length - economyStartIndex;
    const hasEmptyPremiumRoom = groups.premium.occupiedRooms < rooms.premium;
    const hasExtraEconomyGuests = economyGuestsLength > rooms.economy - groups.economy.occupiedRooms;
    const isUpgradePossible = hasExtraEconomyGuests && hasEmptyPremiumRoom;

    if (!isUpgradePossible) {
      break;
    }

    const guest = sortedGuests[economyStartIndex];
    addGuest(guest, groups, 'premium');
    economyStartIndex++;
  }

  for (let i = economyStartIndex; i < sortedGuests.length; i++) {
    const guest = sortedGuests[i];
    const hasEmptyEconomyRoom = groups.economy.occupiedRooms < rooms.economy;

    if (hasEmptyEconomyRoom) {
      addGuest(guest, groups, 'economy');
    }
  }

  return groups;
};
