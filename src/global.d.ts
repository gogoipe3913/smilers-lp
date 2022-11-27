declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

interface ILink {
  label: string;
  href: string;
  id: string;
}