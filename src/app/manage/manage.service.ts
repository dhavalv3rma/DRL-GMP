import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quotes, Sales } from './quotes/quotes.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  constructor(public http:HttpClient) { }

//clients 
  public leadUrl = "api/Leads";
  
  getleads() {
      return this.http.get(this.leadUrl);
  }

  addlead(lead){	    
      return this.http.post(this.leadUrl, lead);
  }

  updatelead(lead){
      return this.http.put(this.leadUrl, lead);
  }

  deletelead(id: number) {
      return this.http.delete(this.leadUrl + "/" + id);
  } 

  /*Campaign*/
public campaignUrl = "api/Quotes";
  
getQuotes(): Observable<Quotes[]> {
    return this.http.get<Quotes[]>(this.campaignUrl);
}

addcampaign(campaign:Quotes){	    
    return this.http.post(this.campaignUrl, campaign);
}

updatecampaign(campaign:Quotes){
    return this.http.put(this.campaignUrl, campaign);
}

deletecampaign(id: number) {
    return this.http.delete(this.campaignUrl + "/" + id);
} 

//contact

public ContactsUrl = "api/Contacts";
  
getcontacts(): Observable<Sales[]> {
    console.log("called");
    return this.http.get<Sales[]>(this.ContactsUrl);
}

addcontact(contact:Sales){	    
    return this.http.post(this.ContactsUrl, contact);
}

updatecontact(contact:Sales){
    return this.http.put(this.ContactsUrl, contact);
}

deletecontact(id: number) {
    return this.http.delete(this.ContactsUrl + "/" + id);
} 


}
