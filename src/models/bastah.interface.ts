export interface BastahInterface {
  sections: string[];
  menu: MenuInterface[];
}

export interface MenuInterface {
  id: string;
  sectionName: string;
  kalams: KalamInterface[];
}

export interface KalamInterface {
  id: string;
  name: string;
  ashaar: string[];
}
