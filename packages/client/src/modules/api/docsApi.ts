import { rootApi } from './api';

export const docsApi = {
  genUval: ({
    userIds,
    templatesIds = ['2', '3'],
    input,
  }: {
    userIds: string[];
    templatesIds?: string[];
    input: { [key: string]: any };
  }): Promise<Blob> =>
    rootApi.post(
      `/docs/uval`,
      {
        userIds,
        templatesIds,
        input,
      },
      {
        responseType: 'blob',
      },
    ),
};
