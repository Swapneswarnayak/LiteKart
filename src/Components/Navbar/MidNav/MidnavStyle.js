const main_div = {
  display: "flex",
  padding: "10px",
//   marginTop: "10px",
  alignItems:"center"
};

const nav_logo = {
  width: "10%",
};

const searchBar = {
//   border: "2px solid pink",
  width: "50%",
};

const search={
    border: "1px solid #757575",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // pr: 3,
    backgroundColor: "#FAFAFA",
    position: "relative",
  }

  const blog={
    display: "flex",
    width: "20%",
    justifyContent: "space-around",
    fontFamily: "graphik, helvetica, sans-serif",
  }

  const blog_space={ letterSpacing: "0.5px" }


  const sign_up={
    textAlign: "center",
    padding: "6px",
    color: "white",
    backgroundColor: "#333333",
    borderRadius: "2px",
  }



export { main_div, nav_logo, searchBar,search,blog,blog_space,sign_up };
