export interface FrameworkField {
  id: string;
  label: string;
  placeholder: string;
}

export interface Framework {
  id:string;
  name: string;
  description: string;
  fields: FrameworkField[];
  example?: string;
}