import React from "react";
import "./App.scss";
import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { INITIAL_CHART_OPTIONS } from "./data/chart-options";
import { CHART_INFO } from "./data/chart-info";

function App() {
  let chartOptions = INITIAL_CHART_OPTIONS;
  const [selectedCategory, setSelectedCategory] = React.useState(CHART_INFO[0]);
  const [selectedProduct, setSelectedProduct] = React.useState(
    CHART_INFO[0].products[0]
  );
  const [selectedBrand, setSelectedBrand] = React.useState(
    CHART_INFO[0].brands[0]
  );

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  const handleProductChange = (product: any) => {
    setSelectedProduct(product);
  };

  const handleBrandChange = (brand: any) => {
    setSelectedBrand(brand);
  };

  Exporting(Highcharts);
  const userName = "John Doe";
  const screenName = "Sales Report";

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
          <select
          className="CustomSelect"
            name="category"
            value={selectedCategory.id}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            {CHART_INFO.map((category) => (
              <option id={category.id.toString()}>{category.name}</option>
            ))}
          </select>
          <select
          className="CustomSelect"
            name="product"
            value={selectedProduct.id}
            onChange={(event) => handleProductChange(event.target.value)}
          >
            {selectedCategory.products.map((product) => (
              <option id={product.id.toString()}>{product.name}</option>
            ))}
          </select>
          <select
          className="CustomSelect"
            name="brand"
            value={selectedBrand.id}
            onChange={(event) => handleBrandChange(event.target.value)}
          >
            {selectedCategory.brands.map((brand) => (
              <option id={brand.id.toString()}>{brand.name}</option>
            ))}
          </select>
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          className="Chart"
        />
      </main>
    </div>
  );
}

export default App;
