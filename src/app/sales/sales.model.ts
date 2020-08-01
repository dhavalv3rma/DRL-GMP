export class Sales {
  id: number;
  username: string;
  password: string;  
  profile: SalesProfile;
  work: SalesWork;
  contacts: SalesContacts;
  social: SalesSocial;
  settings: SalesSettings;
}

export class SalesProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class SalesWork {
  company: string;
  position: string;
  salary: number;
}

export class SalesContacts{
  email: string;
  phone: string;
  address: string;  
}

export class SalesSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class SalesSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}