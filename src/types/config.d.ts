interface IappNavItemConfig {
  text: string;
  link?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  ariaLabel?: string;
}

interface IappConfig {
  icon?: string;
  repo?: string;
  repoLabel?: string;
  docsRepo?: string;
  nav?: IappNavItemConfig[];
}
