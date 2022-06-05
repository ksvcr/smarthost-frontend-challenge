import { GUESTS } from 'features/OccupancyOptimizator/constants/guests';

import { groupGuestsByRoom } from './utils/groupGuestsByRoom';
import { useForm } from '../Form';

export function useGetSummary() {
  const { formData } = useForm();

  const groups = groupGuestsByRoom(formData, GUESTS);

  return groups;
}
