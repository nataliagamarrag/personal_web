const config = {
  title: "Natalia Gamarra",
  lang: "en",
  start_url: "/",
  description: "Data Engineer Peruana 🇵🇪  viviendo en Barcelona 🇪🇸 ",
  author: "Natalia Gamarra",
  fonts: [`material icons`, `Open+Sans+Condense\:300,400,500,700,800,900`],
  icon: "./data/site/images/brand/icon.png",
  url: "https://nataliagamarag.com",
  tagManager: {
    id: "GTM-54M4BNH",
    includeInDevelopment: false,
  },
  menu: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Articles",
      link: "/blog/",
    },
  ],
  social: {
    email: "ngamarraguerrero@gmail.com",
    networks: [
      { name: "Email", src: "mailto:ngamarraguerrero@gmail.com?subject=Hola" },
      { name: "Linkedin", src: "https://www.linkedin.com/in/nataliagamarrag/" },
      {
        name: "Twitter",
        src: "https://twitter.com/nataliagamarrag",
        user: "@nataliagamarrag",
      },
      { name: "Instagram", src: "https://www.instagram.com/nataliagamarra/" },
    ],
  },
}

module.exports = config
