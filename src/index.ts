import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export interface LaravelModelType {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface BackendType {
    url: string;
    token: string;
}

export interface RouteType {
  name: string;
  path: string;
  element: string;
}

export interface PackageDataType {
  initializer?: string;
  setToken?: string;
  api?: string[];
  routes?: RouteType[]
}

export interface WindowWS extends Window {
    Pusher: typeof Pusher;
    Echo: Echo;
}
