interface IappNavItemConfig {
  text: string;
  link?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  ariaLabel?: string;
}

interface IappConfig {
  title?: string;
  repo?: string;
  repoLabel?: string;
  docsRepo?: string;
  nav?: IappNavItemConfig[];
  notFoundMessage?: string[];
}
