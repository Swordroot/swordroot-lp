import axios from 'axios';
import { parse, HTMLElement } from 'node-html-parser';
import { Context } from '@nuxt/vue-app';

type OGPData = {
  type?: string;
  title?: string;
  sitename?: string;
  admin?: string;
  locale?: string;
  image?: string;
  url?: string;
  description?: string;
};

export default function(ctx: Context, inject: Function) {
  const ogpGetter = async (url: string) => {
    const resp = await axios.get(url);
    const body = resp.data;
    const parsedDoc: HTMLElement = parse(body) as HTMLElement;
    const metas = parsedDoc.querySelectorAll('meta');
    const ogpData = metas.reduce((prev: OGPData, el: HTMLElement) => {
      const prop = el.attributes['property'];
      switch (prop) {
        case 'og:type':
          prev.type = el.attributes['content'];
          break;
        case 'og:title':
          prev.title = el.attributes['content'];
          break;
        case 'og:sitename':
          prev.sitename = el.attributes['content'];
          break;
        case 'og:admin':
          prev.admin = el.attributes['content'];
          break;
        case 'og:locale':
          prev.locale = el.attributes['content'];
          break;
        case 'og:url':
          prev.url = el.attributes['content'];
          break;
        case 'og:description':
          prev.description = el.attributes['content'];
          break;
        case 'og:image':
          prev.image = el.attributes['content'];
          break;
      }
      return prev;
    }, {});
    return ogpData;
  };
  inject('ogpGetter', ogpGetter);
}
