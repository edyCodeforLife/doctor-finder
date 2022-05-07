// Internal modules
import IDoctor from '@/interfaces/IDoctor';
import { IOption } from '@/interfaces/IFilter';
import { useAppContext } from '@/states/context';

/**
 * Hook to filter doctors based on the given criteria
 * @returns {doctors} The filtered doctors
 */
const useFilter = (doctors: IDoctor[]) => {
  const { state } = useAppContext();

  // Helper function to determine the given array is empty
  const isEmpty = (array: IOption[]) => array.length === 0;

  // Get searchTerm, selectedHospitals, and selectedSpecializations from the global state
  const { searchTerm, selectedHospitals, selectedSpecializations } = state;

  // Determines whether searchTerm is match to doctor name
  const search = (searchTerm: string) => (doctor: IDoctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase());

  const getLabel = (array: IOption[], callback: (item: IOption) => void) => {
    return array.map(callback);
  };
  const label = (item: IOption): string => item.label;

  // Create Array of strings hospitals and specializations
  // from selectedHospitals and selectedSpecializations
  const hospitals = getLabel(selectedHospitals, label);
  const specializations = getLabel(selectedSpecializations, label);

  // Filter doctors by hospitals
  const filteringHospitals = ({ hospital }: any) =>
    hospitals.some(item => hospital[0].name.indexOf(item) >= 0);
  const doctorsByHospitals = doctors.filter(filteringHospitals);

  // Filter doctors by specializations
  const filteringSpecializations = ({ specialization }: any) =>
    specializations.some(item => specialization.name.indexOf(item) >= 0);
  const doctorsBySpecializations = doctors.filter(filteringSpecializations);

  // Join doctors by hospitals and by specializations
  // There might duplicate data here
  const joinedFilter = [...doctorsByHospitals, ...doctorsBySpecializations];

  // Remove duplicate data of the joined filter
  const isUnique = (item: IDoctor, index: number) =>
    joinedFilter.indexOf(item) !== index;

  const rawFilteredDoctors =
    // If filter by hospitals and filter by specializations are being used
    !isEmpty(selectedHospitals) && !isEmpty(selectedSpecializations)
      ? // Remove duplicate data of the joined filter
        joinedFilter.filter(isUnique)
      : // Otherwise, nothing to do with joined filter
        joinedFilter;

  const filteredDoctors =
    // If filter by hospitals and filter by specializations aren't being used
    isEmpty(selectedHospitals) && isEmpty(selectedSpecializations)
      ? // Use unfiltered doctors
        doctors.filter(search(searchTerm))
      : // Otherwise, use filtered doctors
        rawFilteredDoctors.filter(search(searchTerm));

  return { filteredDoctors };
};

export default useFilter;
