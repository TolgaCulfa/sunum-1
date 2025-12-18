
export interface Agency {
  id: string;
  name: string;
  shortName: string;
  founded: number;
  headquarters: string;
  description: string;
  imageUrl: string;
  stats: {
    countries: string;
    staff: string;
    languages: string;
  };
}

export interface Presenter {
  id: string;
  name: string;
  agencies: Agency[];
}
