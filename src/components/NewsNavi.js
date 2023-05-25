import React, { useState } from "react";
import { styled } from "styled-components";

const NewsNaviDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
  li {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    list-style: none;
    font-size: 23px;
    color: #395144; /* Set the default color */
  }
  li:hover {
    cursor: pointer;
    transform: scale(1.05);
    cursor: pointer;
  }
  li.selected { /* Apply the red color to the selected item */
    color: #704F4F;
  }
  input {
    width: 200px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
`;

const NewsNavi = ({ category, onSelect, onEnter }) => {
  const [inputValue, setInputValue] = useState("");

  const handleItemClick = (itemName) => {
    onSelect(itemName);
    setInputValue(""); // Reset the input value when an item is clicked
  };

  const handleInputEnter = (event) => {
    if (event.key === "Enter") {
      onEnter(event.target.value);
      setInputValue(""); // Reset the input value when Enter key is pressed
    }
  };

  const newsMenu = [
    { name: "All", value: "전체 보기" },
    { name: "LatestNews", value: "최신순" }
  ];

  return (
    <NewsNaviDiv>
      {newsMenu.map((newsItem) => (
        <ul key={newsItem.name}>
          <div>
            <li
              onClick={() => handleItemClick(newsItem.name)}
              className={category === newsItem.name ? "selected" : ""}
            >
              {newsItem.value}
            </li>
          </div>
        </ul>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleInputEnter}
      />
    </NewsNaviDiv>
  );
};

export default NewsNavi;
