const imgProizvodi = "/img/proizvodi/";
const imgLogo = "/img/logo/";
const imgBgr = "/img/background/";

export const proizvodjaciData = [
  {
    naziv: "JUB",
    mesto: "Šimanovci",
    background: imgBgr + "jub_bg.jpg",
    logo: imgLogo + "jublogo.png",
    proizvodi: [
      {
        naziv: "Bela boja 15l",
        opis: "Idealna za prve radove.",
        cena: "1587.4",
        img: imgProizvodi + "belajub.png",
        sastojci: {
          voda: "12", 
          azot: "36.5",
          amonijak: "11",
          sumpor: "0.2"
        },
      },
      {
        naziv: "Plava boja 10l",
        opis: "Osećaćete se kao da ste na nebu.",
        cena: "2000",
        img: imgProizvodi + "plavajub.jpg",
        sastojci: {
          voda: "9", 
          azot: "0",
          amonijak: "25",
          sumpor: "52"
        },
      },
      {
        naziv: "Crvena boja 5l",
        opis: "Jarko crvena za hrabre ljude.",
        cena: "988.54",
        img: imgProizvodi + "crvenajub.jpg",
        sastojci: {
          voda: "33", 
          azot: "0.02",
          amonijak: "0.5",
          sumpor: "44"
        },
      },
    ],
  },
  {
    naziv: "Helios",
    mesto: "Čačak",
    background: imgBgr + "helios_bg.jpg",
    logo: imgLogo + "helios.png",
    proizvodi: [
      {
        naziv: "Spektra bela boja 15l",
        opis: "Bela boja za vaše zidove najvišeg kvaliteta.",
        cena: "2566.4",
        img: imgProizvodi + "belahelios.jpg",
        sastojci: {
          voda: "63", 
          azot: "0",
          amonijak: "20",
          sumpor: "1.2"
        },
      },
      {
        naziv: "Akrilna fasadna boja 10l",
        opis: "Savršena za vašu fasadu.",
        cena: "1893",
        img: imgProizvodi + "akrilnahelios.jpg",
        sastojci: {
          voda: "20", 
          azot: "25",
          amonijak: "30",
          sumpor: "25"
        },
      },
      {
        naziv: "Mat boja 15l",
        opis: "Idealna kada želite da površine budu savršeno izmatirane.",
        cena: "3698.4",
        img: imgProizvodi + "mathelios.jpg",
        sastojci: {
          voda: "22", 
          azot: "11",
          amonijak: "0.458",
          sumpor: "8.731"
        },
      },
    ],
  },
];
