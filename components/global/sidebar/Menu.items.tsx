import { COLLECTIONS, PagesEnum } from "../../../utils/types/enum";

export const MenuItems = [
  {
    title: COLLECTIONS.COLLECTION,
    category: [
      {
        title: "Beauty",
        path: `/${PagesEnum.Beauty}`,
        subCategory: [
          {
            title: "Hair Dressers",
            path: `/${PagesEnum.Hairdressers}`,
          },
          {
            title: "Make up Artists",
            path: `/${PagesEnum.MakeUp}`,
          },
          {
            title: "Spa & Massage",
            path: `/${PagesEnum.spa}`,
          },
          {
            title: "Laser Treatment",
            path: `/${PagesEnum.LaserTreatment}`,
          },

          {
            title: "Nail Salons",
            path: `/${PagesEnum.NailSalons}`,
          },
          {
            title: "Skin Care",
            path: `/${PagesEnum.SkinCare}`,
          },
          {
            title: "Tatto & Microblading",
            path: `/${PagesEnum.TattoMicroBlading}`,
          },
          {
            title: "Teeth Wightening",
            path: `/${PagesEnum.TeethWhitening}`,
          },
        ],
        imgUrl: "https://smarthub-imgs.s3.me-south-1.amazonaws.com/beauty.jpeg",
      },
      {
        title: "Fashion",
        path: `/${PagesEnum.Fashion}`,
        subCategory: [
          {
            title: "Fashion Designers",
            path: `/${PagesEnum.FashionDesigners}`,
          },
          {
            title: "Wedding Dresses",
            path: `/${PagesEnum.WeddingDresses}`,
          },
          {
            title: "Evening Dresses",
            path: `/${PagesEnum.EveningDresses}`,
          },
          {
            title: "Suits & Tuxedos",
            path: `/${PagesEnum.Suits}`,
          },
          {
            title: "Home wear",
            path: `/${PagesEnum.HomeWear}`,
          },
          {
            title: "Lingerie",
            path: `/${PagesEnum.Lingerie}`,
          },

          {
            title: "Bride Maids Dresses",
            path: `/${PagesEnum.BrideMaidDresses}`,
          },
          {
            title: "Flower Girl",
            path: `/${PagesEnum.FlowerGirl}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/fashion.jpeg",
      },

      {
        title: "Planning - Entertainment",
        path: `/${PagesEnum.Planning}`,
        subCategory: [
          {
            title: "Wedding & Event Planners",
            path: `/${PagesEnum.WeddingPlanners}`,
          },
          {
            title: "Djs",
            path: `/${PagesEnum.Djs}`,
          },
          {
            title: "Zaffa & Bands",
            path: `/${PagesEnum.Zaffa}`,
          },
          {
            title: "Belly Dancers",
            path: `/${PagesEnum.BellyDancer}`,
          },
          {
            title: "Bar Tenders",
            path: `/${PagesEnum.BarTenders}`,
          },
          {
            title: "Lighting & Fireworks",
            path: `/${PagesEnum.Fireworks}`,
          },
          {
            title: "Limousine & Carriages",
            path: `/${PagesEnum.Limousine}`,
          },
          {
            title: "Photographers",
            path: `/${PagesEnum.Photographers}`,
          },
          {
            title: "Photobooths",
            path: `/${PagesEnum.Photobooths}`,
          },
          {
            title: "Caterer",
            path: `/${PagesEnum.Caterer}`,
          },
          {
            title: "Cakes",
            path: `/${PagesEnum.Cakes}`,
          },
          {
            title: "Videographers & Film Making",
            path: `/${PagesEnum.Videographers}`,
          },
          {
            title: "Chocolates",
            path: `/${PagesEnum.Chocolates}`,
          },
          {
            title: "Invitations & Bonbonires",
            path: `/${PagesEnum.Invitations}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/planning.jpeg",
      },
      {
        title: "Jewelers & Wearable Accessories",
        path: `/${PagesEnum.Jewelers}`,
        subCategory: [
          {
            title: "Wedding & Engagement Ring",
            path: `/${PagesEnum.WeddingRing}`,
          },
          {
            title: "Proposal Ring",
            path: `/${PagesEnum.ProposalRing}`,
          },
          {
            title: "Bridal Tiars",
            path: `/${PagesEnum.BridalTiars}`,
          },
          {
            title: "Wigs",
            path: `/${PagesEnum.Wigs}`,
          },
          {
            title: "Shoes",
            path: `/${PagesEnum.Shoes}`,
          },
          {
            title: "Bachrolete dress",
            path: `/${PagesEnum.BachroleteDress}`,
          },
          {
            title: "Headpieces",
            path: `/${PagesEnum.Headpieces}`,
          },
          {
            title: "Bouquet",
            path: `/${PagesEnum.Bouquet}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/jewelers.jpeg",
      },
      {
        title: "Hotels - Resorts",
        path: `/${PagesEnum.Hotels}`,
        subCategory: [
          {
            title: "Hotels",
            path: `/${PagesEnum.Hotels}`,
          },
          {
            title: "Resorts",
            path: `/${PagesEnum.Resorts}`,
          },
          {
            title: "Villas",
            path: `/${PagesEnum.Villas}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/honeymoonnn.jpeg",
      },
      {
        title: "Furnishing – Interior Designers",
        path: `/${PagesEnum.Furnishing}`,
        subCategory: [],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/furnishing.jpeg",
      },
      {
        title: "Proposal Outing - Dating",
        path: `/${PagesEnum.Outings}`,
        subCategory: [
          {
            title: "Restaurant",
            path: `/${PagesEnum.Restaurant}`,
          },
          {
            title: " Bars",
            path: `/${PagesEnum.Bars}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/outings.jpeg",
      },
      {
        title: "Real-Estate",
        path: `/${PagesEnum.RealEstate}`,
        subCategory: [
          {
            title: "Brokerage Companies",
            path: `/${PagesEnum.BrokerageCompanies}`,
          },
          {
            title: "Developers",
            path: `/${PagesEnum.Developers}`,
          },
        ],
        imgUrl:
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/real+estate.jpeg",
      },
      {
        title: "Churches and  Mosques",
        path: `/${PagesEnum.ChurchsAndMosques}`,
        subCategory: [],
      },
    ],
  },
  { title: COLLECTIONS.WEDDING_DETAILS, category: [] },
];
