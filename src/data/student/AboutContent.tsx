export interface AboutContent {
  title: string;
  description: {
    heading: string;
    body: string;
    readMoreText: string;
  };
  social: {
    title: string;
    addButtonText: string;
  };
}

export const aboutContent: AboutContent = {
  title: "Company Details",
  description: {
    heading: "About",
    body: `cursus dui In Vestibulum ex lacus, facilisis Morbi dui lacus consectetur luctus enim. lorem. vel amet, non placerat non. Sed viverra vitae turpis quam Nullam fringilla commodo ipsum commodo ex. quis enim. sapien efficitur. adipiscing quam\nsit Ut enim. ullamcorper vitae est. nibh Donec non nibh eget enim. tincidunt massa consectetur orci non, Donec odio urna placerat odio Cras volutpat faucibus ex Sed laoreet facilisis ac tincidunt Nam lorem. scelerisque non, hendrerit in celerisque id urna. nisi scelerisque lorem. at nisi Vestibulum Nullam Donec orci dignissim, faucibus Nam ipsum viverra viverra nisl. non ac nec non at fringilla quis Ut sapien leo. lobortis, dolor non viverra laoreet Nunc non elit eget\n\nMorbi viverra viverra tincidunt dolor consectetur quis elit. nulla, dui elementum orci nibh amet, lacus, ex urna. ipsum efficitur. elit Vestibulum Ut dignissim, ullamcorper malesuada Sed sollicitudin. tincidunt efficitur. felis, odio quam`,
    readMoreText: "Read More"
  },
  social: {
    title: "Social",
    addButtonText: "Add"
  }
};
