export class Leads {
  id: number;
  username: string;
  password: string;
  industry: string;
  prospects: number;  
  campaign: string;
  profile: LeadsProfile;
  work: LeadsWork;
  contacts: LeadsContacts;
  social: LeadsSocial;
  settings: LeadsSettings;
  selected:any;
}

export class LeadsProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class LeadsWork {
  company: string;
  position: string;
  salary: number;
}

export class LeadsContacts{
  email: string;
  phone: string;
  address: string;  
}

export class LeadsSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class LeadsSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}