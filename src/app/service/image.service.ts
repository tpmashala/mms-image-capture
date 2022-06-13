import { Injectable } from '@angular/core';
import { HttpClient, 
  HttpErrorResponse,
  HttpHeaders,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ImageModel } from '../model/image-model';

const endpoint: string = 'api/v1/pondimage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  readonly ROOT_URL;
 
  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3005';
   }

  public getAllImages<ImageModel>() {

    return this.http
      .get<ImageModel>(`${this.ROOT_URL}/${endpoint}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  public saveImage(payload: ImageModel) {
    const formData = new FormData();

    formData.append('capturedPondImage', payload.capturedPondImage);
    formData.append('capturedTimestamp', payload.capturedTimestamp);

    return this.http
      .post<ImageModel>(`${this.ROOT_URL}/${endpoint}`, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A network error happened :', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'There was an error while attempting to fetch the images; please try again later.'
    );
  }
}
