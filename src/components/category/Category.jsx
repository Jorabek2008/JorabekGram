import { Stack } from "@mui/material";
import React from "react";
import { category } from "../../constant/";
import { colors } from "./../../constant/colors";

function Category({ selectedCategoryHandler, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          onClick={() => selectedCategoryHandler(item.name)}
          className="category-btn"
          style={{ borderRadius: "0", background: item.name === selectedCategory && colors.secondary, color: item.name === selectedCategory && "#fff"}}
        >
          <span style={{ color: item.name === selectedCategory ? "#fff" : colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
