import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportTicket } from './supportticket.model';

@Injectable({
  providedIn: 'root'
})
export class SupportticketsService {

  constructor(public http:HttpClient) { }

  createNewSupportTicket(supportTicket:any):any{
    return this.http.post('http://localhost:7777/supporttickets/createNewSupportTicket',supportTicket,{responseType:'text'});
  }

  getOpenSupportTicketByID(id:any):Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`http://localhost:7777/supporttickets/getOpenTicketsByID/${id}`)
  }

  getAllSupportTickets():Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`http://localhost:7777/supporttickets/getAllSupportTickets`)
  }

  updateSupportTicketStatus(supportRef:any):any{
    return this.http.put(`http://localhost:7777/supporttickets/updateSupportTicketStatus`,supportRef)
  }

  closeTicketByID(supportRef:any):any{
    return this.http.delete(`http://localhost:7777/supporttickets/closeTicketByID/${supportRef}`,{responseType:'text'})
  }
}
