import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CallbackService {
  constructor(private http: HttpClient) {}

  getUserbyEmail(email:any) {
    return this.http.get(`http://localhost:3000/usuario?email=${email}`).pipe(take(1));
  }
  
}
