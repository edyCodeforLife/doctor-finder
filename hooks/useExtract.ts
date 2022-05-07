// Internal modules
import IDoctor, { IHospital, ISpecialization } from '@/interfaces/IDoctor';
import IOption from '@/interfaces/IOption';

/**
 * Hook to extract hospitals and specializations from doctors
 * @returns {hospitals, specializations} The extracted hospitals and specializations
 */
const useExtract = (doctors: IDoctor[]) => {
  // Extract hospitals and specializations from doctors and remove duplicates
  const uniqueHospitals = doctors
    .map((doctor: IDoctor) => doctor.hospital)
    .flat()
    .filter((hospital, index, self) => {
      return index === self.findIndex(item => item.id === hospital.id);
    });
  const uniqueSpecializations = doctors
    .map((doctor: IDoctor) => doctor.specialization)
    .filter((hospital, index, self) => {
      return index === self.findIndex(item => item.id === hospital.id);
    });

  // Helper function to set option object
  const setOption = (data: IHospital | ISpecialization): IOption => ({
    value: data.id,
    label: data.name,
  });

  // Destructure hospitals and specializations
  const hospitals = uniqueHospitals.map((hospital): IOption => {
    return setOption(hospital);
  });
  const specializations = uniqueSpecializations.map(
    (specialization): IOption => {
      return setOption(specialization);
    }
  );

  return { hospitals, specializations };
};

export default useExtract;
