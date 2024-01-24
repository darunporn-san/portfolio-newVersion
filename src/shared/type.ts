export interface INavigation {
  name: string;
  href: string;
}


export interface IProject{
  detail: string;
  language?: string;
}

export interface IExperience {
    name: string;
    project?: IProject[];
    product?:IProject[];
    position:string;
    year: string;
    logo1: string;
  }
  

  export interface IAboutUS{
    label:string;
    icon:any;
    value?:string;
    url?:string;
  }

  export interface ISkill{
    name:string;
    image:string;
  }

  export interface IExampleWorking{
    name: string;
    first_image: string;
    second_image?: string;
  }

  export interface IExampleProject{
    name: string;
    detail?:string
    project:IExampleWorking[]

  }