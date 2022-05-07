export interface ISpecialization {
  readonly id: string;
  readonly name: string;
}

interface IPrice {
  readonly formatted: string;
  readonly raw: number;
}

interface IFormat {
  readonly [key: string]: string;
}

interface IImage {
  readonly formats: IFormat;
  readonly size_formatted: string;
  readonly url: string;
}

export interface IHospital {
  readonly icon: IImage;
  readonly id: string;
  readonly image: IImage;
  readonly name: string;
}

interface IDoctor {
  readonly about: string;
  readonly about_preview: string;
  readonly doctor_id: string;
  readonly experience: string;
  readonly hospital: IHospital[];
  readonly is_popular: boolean;
  readonly name: string;
  readonly overview: string;
  readonly photo: IImage;
  readonly price: IPrice;
  readonly sip: string;
  readonly slug: string;
  readonly specialization: ISpecialization;
}

export default IDoctor;
