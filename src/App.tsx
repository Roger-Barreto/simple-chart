import React from "react";
import "./App.scss";
import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { INITIAL_CHART_OPTIONS } from "./data/chart-options";
import { CHART_INFO } from "./data/chart-info";

function App() {
  Exporting(Highcharts);
  const userName = "John Doe";
  const screenName = "Sales Report";

  const [chartData, setChartData] = React.useState<any>(INITIAL_CHART_OPTIONS);
  const [selectedCategory, setSelectedCategory] = React.useState(CHART_INFO[0]);
  const [selectedProduct, setSelectedProduct] = React.useState(
    CHART_INFO[0].products[0]
  );
  const [selectedBrand, setSelectedBrand] = React.useState(
    CHART_INFO[0].brands[0]
  );

  const handleCategoryChange = (id: number) => {
    let category = CHART_INFO.find((c) => c.id === id);
    if (category) {
      setSelectedCategory(category);
      setSelectedBrand(category.brands[0]);
      setSelectedProduct(category.products[0]);
      updateChartData();
    }
  };

  const handleProductChange = (id: number) => {
    let product;
    CHART_INFO.forEach((category) => {
      product = category.products.find((p) => p.id === id);
      if (product) {
        setSelectedProduct(product);
        updateChartData();
      }
    });
  };

  const handleBrandChange = (id: number) => {
    let brand;
    CHART_INFO.forEach((category) => {
      brand = category.brands.find((b) => b.id === id);
      if (brand) {
        setSelectedBrand(brand);
        updateChartData();
      }
    });
  };

  const updateChartData = () => {
    let category = CHART_INFO.find(
      (category) => category.id === selectedCategory.id
    );
    let product = category?.products.find(
      (product) => product.id === selectedProduct.id
    );
    let sales: number[] = [];

    product?.sales.forEach((sale) => {
      if (sale.brandId === selectedBrand.id) {
        sales = sale.quantity;
      }
    });

    let newChartData = chartData
    newChartData.series[0].data = sales;
    setChartData(newChartData);
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <div className="Container">
          <h2 className="User">
            <div className="Circle"></div>
            {userName}
          </h2>
          <h1 className="Title">{screenName}</h1>
        </div>
      </header>
      <main>
        <div className="Actions">
          <div className="Group">
            <div className="Label">Category</div>
            <select
              key={"select-category"}
              className="CustomSelect"
              name="category"
              value={selectedCategory.id}
              onChange={(event) => handleCategoryChange(+event.target.value)}
            >
              {CHART_INFO.map((category) => (
                <option
                  key={category.id}
                  id={category.id.toString()}
                  value={category.id.toString()}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="Group">
            <div className="Label">Product</div>
            <select
              key={"select-product"}
              className="CustomSelect"
              name="product"
              value={selectedProduct.id}
              onChange={(event) => handleProductChange(+event.target.value)}
            >
              {selectedCategory.products.map((product) => (
                <option
                  key={product.id}
                  id={product.id.toString()}
                  value={product.id.toString()}
                >
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="Group">
            <div className="Label">Brand</div>
            <select
              key={"select-brand"}
              className="CustomSelect"
              name="brand"
              value={selectedBrand.id}
              onChange={(event) => handleBrandChange(+event.target.value)}
            >
              {selectedCategory.brands.map((brand) => (
                <option
                  key={brand.id}
                  id={brand.id.toString()}
                  value={brand.id.toString()}
                >
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartData}
          className="Chart"
          updateArgs={[true]}
        />
      </main>
    </div>
  );
}

export default App;
