import styled from "styled-components";
import FoodContainer from "./assets/compnents/FoodContainer/FoodContainer";
import { useState } from "react";
import { useEffect } from "react";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [filterBtns, setFilterBtns] = useState("all");

  useEffect(() => {
    const fetechFoodData = async () => {
      const response = await fetch(BASE_URL);

      setLoading(true);
      try {
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch the data");
      }
    };

    fetechFoodData();
  }, []);

  const SearchFood = (e) => {
    const SearchValue = e.target.value;

    console.log(SearchValue);

    if (SearchValue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(SearchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const FilterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setFilterBtns("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setFilterBtns(type);
  };

  const filterButton = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logimage">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="searchBar">
            <input onChange={SearchFood} placeholder="Search Food...." />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterButton.map((value) => (
            <Button isSelecte = {filterBtns==value.type} key={value.name} onClick={() => FilterFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <FoodContainer data={filterData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const TopContainer = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    padding: 16px;
  
  .searchBar input {
    width: 200px;
    height: 40px;
    padding: 0 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid red;
    color: white;
    font-size: 16px;

    &::placeholder {
      color: white;
    }
  }
  .buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-bottom: 30px;
  }

  @media (0 < width <600px) {
    flex-direction: column;
    height: 100px;
    
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  width: Hug (96px) px;
  height: Hug (31px) px;
  padding: 6px 12px 6px 12px;
  border-radius: 5px;
  background-color:${({isSelecte})=> (isSelecte ? "#a90000" : "#ff4343" )} ;
  color: white;
  border: solid 1px  ${({isSelecte}) => (isSelecte ? "white" : "#ff4343")}; 
  cursor: pointer;

  &:hover {
    background-color: #a90000;
  }
`;
