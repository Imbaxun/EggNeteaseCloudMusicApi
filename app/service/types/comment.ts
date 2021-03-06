export interface iGetResourceComments extends iPageParams {
  resourceId: string;
  type: Resource_Type;
  beforeTime: number;
}

export interface iPostResourceCommentLike {
  resourceId: string;
  commentId: string;
  type: Resource_Type;
  actionType: 'like' | 'unlike';
}

export interface iPostResourceCommentSend {
  resourceId: string;
  type: Resource_Type;
  content: string;
}

export interface iPostResourceCommentReply {
  resourceId: string;
  type: Resource_Type;
  commentId: string;
  content: string;
}

export interface iDeleteResourceComment {
  resourceId: string;
  type: Resource_Type;
  commentId: string;
}

export type Resource_Type =
  | 'album'
  | 'dj'
  | 'music'
  | 'mv'
  | 'playlist'
  | 'video'
  | 'event';

export enum Comment_Resource_Type {
  album = 'R_AL_3_',
  dj = 'A_DJ_1_',
  music = 'R_SO_4_',
  mv = 'R_MV_5_',
  playlist = 'A_PL_0_',
  video = 'R_VI_62_',
  event = 'A_EV_2_',
}

export interface iPageParams {
  offset?: number;
  limit?: number;
}
