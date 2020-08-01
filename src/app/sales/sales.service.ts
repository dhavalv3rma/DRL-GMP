import { Injectable } from '@angular/core';
import { Sales } from './sales.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {


  constructor(public http:HttpClient) { }

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

    //accounts 
public AccountsUrl = "api/Accounts";
  
getaccounts(): Observable<Sales[]> {
    return this.http.get<Sales[]>(this.AccountsUrl);
}

addaccount(account:Sales){	    
    return this.http.post(this.AccountsUrl, account);
}

updateaccount(account:Sales){
    return this.http.put(this.AccountsUrl, account);
}

deleteaccount(id: number) {
    return this.http.delete(this.AccountsUrl + "/" + id);
} 

}
