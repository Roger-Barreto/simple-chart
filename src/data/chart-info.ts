export const CHART_INFO: ICategory[] = [
  {
    id: 1,
    name: "Fruit",
    products: [
      {
        id: 1,
        name: "Apple",
        sales: [
          {
            brandId: 1,
            quantity: [100, 130, 210, 80],
          },
          {
            brandId: 2,
            quantity: [200, 260, 310, 120],
          },
        ],
      },
      {
        id: 2,
        name: "Banana",
        sales: [
          {
            brandId: 1,
            quantity: [150, 112, 26, 95],
          },
          {
            brandId: 2,
            quantity: [250, 420, 50, 0],
          },
        ],
      },
    ],

    brands: [
      {
        id: 1,
        name: "Fruit Brand 1",
      },
      {
        id: 2,
        name: "Fruit Brand 2",
      },
    ],
  },

  {
    id: 2,
    name: "Vegetable",
    products: [
      {
        id: 3,
        name: "Carrot",
        sales: [
          {
            brandId: 3,
            quantity: [70, 80, 90, 100],
          },
          {
            brandId: 4,
            quantity: [120, 130, 140, 150],
          },
        ],
      },
      {
        id: 4,
        name: "Potato",
        sales: [
          {
            brandId: 3,
            quantity: [170, 180, 190, 200],
          },
          {
            brandId: 4,
            quantity: [130, 140, 150, 160],
          },
        ],
      },
    ],
    brands: [
      {
        id: 3,
        name: "Vegetable Brand 1",
      },
      {
        id: 4,
        name: "Vegetable Brand 2",
      },
    ],
  },
];

export interface IProduct {
  id: number;
  name: string;
  sales: {
    brandId: number;
    quantity: number[];
  }[];
}

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
  brands: IBrand[];
}

export interface IBrand {
  id: number;
  name: string;
}
