interface ILink {
  title: string;
  path: string;
}

interface ISubMenu {
  title?: string;
  path?: string;
  links?: ILink[];
  children?: ISubMenu[];
}

interface IMeghaMenuProps {
  isOpen: any; setIsOpen: any
  item: {
    title?: string;
    children?: ISubMenu[];
  };
}

interface IDropdownMenuProps {
  isOpen: any; setIsOpen: any
  level: number;
  item: {
    type?: string;
    path?: string;
    title?: "home" |"title" |string;
    children?: IMenuChildProps[];
  };
}

interface IMenuChildProps {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: IMenuChildProps[];
}
