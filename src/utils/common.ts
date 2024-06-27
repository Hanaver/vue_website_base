import { useRouter } from 'vue-router';
import i18n from '@/utils/i18n';

// 跳转路由
export function useNavigation() {
  const router = useRouter();

  const goPath = (path: string, params?: {[key: string] : any}) => {
    if (params) {
        const queryParams = new URLSearchParams(params).toString();
        path += `?${queryParams}`;
    }
    router.push(path);
  };

  return {
    goPath,
  };
}

// 切换语言
export function changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    i18n.global.locale = lang;
}

