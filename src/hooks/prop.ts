const platforms: [string, RegExp][] = ['GitHub', 'GitLab'].map((platform) => [
  platform,
  new RegExp(platform, 'i'),
]);

const getRepoUrl = (repo: string) => (/^https?:/.test(repo) ? repo : `https://github.com/${repo}`);
const getRepoText = (url: string, text: string) => {
  const defaultText = 'Source';
  if (text) return text;

  const hosts = url.match(/^https?:\/\/[^/]+/);
  if (!hosts) return defaultText;

  const platform = platforms.find(([_p, regexp]) => regexp.test(hosts[0]));
  return platform && platform[0] ? platform[0] : defaultText;
};

// eslint-disable-next-line import/prefer-default-export
export const useProp = (config: IappConfig) => {
  const { repo, repoLabel = '', docsRepo } = config;
  const name = docsRepo || repo;

  if (!name) return null;
  const link = getRepoUrl(name);
  const text = getRepoText(link, repoLabel);

  return {
    text,
    link,
  };
};
