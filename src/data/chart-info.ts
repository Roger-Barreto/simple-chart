export const CHART_INFO: ICategory[] = [
  {
    id: 1,
    name: "Fruit",
    products: [
      {
        id: 1,
        name: "Apple",
        brand: 1,
      },
      {
        id: 2,
        name: "Banana",
        brand: 2,
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
        brand: 3,
      },
      {
        id: 4,
        name: "Potato",
        brand: 3,
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
  brand: number;
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
