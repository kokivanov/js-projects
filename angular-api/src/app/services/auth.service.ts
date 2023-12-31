import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiKey?: string;

  public get apiKey() {
    return this._apiKey;
  }

  public setApiKey(key: string) {
    this._apiKey = key;
  }
}
