// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArtist from '../../../app/controller/artist';
import ExportLogin from '../../../app/controller/login';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    artist: ExportArtist;
    login: ExportLogin;
    user: ExportUser;
  }
}
