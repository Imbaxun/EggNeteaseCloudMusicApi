import { Service } from 'egg';
import createRequest from '../utils/createRequest';
import {
  iVideoId,
  iGetGroupVideos,
  iPostVideoSub,
  iGetVideoUrls,
} from './types/video';

/**
 * Video Service
 */
export default class Video extends Service {
  /**
   * @description 获取视频信息
   * @param videoId
   */
  public async getVideoInfo({ videoId }: iVideoId): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;
    return createRequest(
      'POST',
      'https://music.163.com/weapi/cloudvideo/v1/video/detail',
      {
        videoId,
      },
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
      }
    );
  }

  /**
   * @description 获取视频信息
   */
  public async getVideoGroupList(): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;
    return createRequest(
      'POST',
      'https://music.163.com/api/cloudvideo/group/list',
      {},
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
      }
    );
  }

  /**
   * @description 获取视频分组下视频
   * @param groupId
   * @param limit
   * @param resolution
   */
  public async getVideoGroupVideos({
    groupId,
    offset,
    resolution,
  }: iGetGroupVideos): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;
    return createRequest(
      'POST',
      'https://music.163.com/weapi/videotimeline/videogroup/get',
      {
        groupId,
        offset: offset,
        resolution,
        needUrl: true,
      },
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
      }
    );
  }

  /**
   * @description 收藏 ｜ 取消收藏 专辑
   * @param albumId
   * @param actionType
   */
  public async postVideoSub({
    videoId,
    actionType,
  }: iPostVideoSub): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/cloudvideo/video/${actionType}`,
      {
        id: videoId,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取视频URL
   * @param videoIds
   * @param resolution
   */
  public async getVideoUrls({
    videoIds,
    resolution,
  }: iGetVideoUrls): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/cloudvideo/playurl`,
      {
        ids: '["' + videoIds + '"]',
        resolution,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }
}
