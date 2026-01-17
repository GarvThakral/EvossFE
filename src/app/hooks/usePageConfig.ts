import { useEffect, useState } from 'react';

export function usePageConfig<T>(page: string, defaultConfig: T) {
  const [config, setConfig] = useState<T>(defaultConfig);

  useEffect(() => {
    let active = true;

    const fetchConfig = async () => {
      try {
        const response = await fetch(`/config/${page}.json`);
        if (!response.ok) {
          throw new Error('Failed to load config');
        }
        const data = (await response.json()) as T;
        if (active && data) {
          setConfig(data);
        }
      } catch (error) {
        console.warn('Unable to load config', error);
      }
    };

    fetchConfig();

    return () => {
      active = false;
    };
  }, [page]);

  return config;
}
