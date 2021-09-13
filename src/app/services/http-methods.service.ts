import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpMethodsService {
  baseUrl = 'https://api-edufood.mskh.am';

  constructor(private http: HttpClient) {}

  /** GET items from the server */
  getItems(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${path}`);
  }

  /** POST: add a new item to the database */
  addItem(path: string, item: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/${path}`, item);
  }

  /** POST: add a new image to the database */
  upload(path: string, item: any): Observable<any> {
    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    formData.append("file", item);
    // httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.post<any>(`${this.baseUrl}/${path}`, formData);
  }

  /** DELETE: delete the item from the server */
  deleteItem(path: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${path}`);
  }

  /** PUT: update the item on the server. Returns the updated item upon success. */
  updateItem(path: string, item?: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${path}`, item);
  }

  /** PATCH: update the item on the server partially. Returns the updated item upon success. */
  updateItemPartially(path: string, item: any, id: number): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${path}/${id}`, item);
  }
}
