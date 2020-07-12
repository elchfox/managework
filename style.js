var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  
  row: {
    flex: 1,
    flexDirection: "row"
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  rowSpaceAround: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  columnSpaceAround: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  rowSpaceBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnSpaceBetween: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  wapper:{
    flex:1,
    width:"100%",
    justifyContent:'center',
    alignItems:'center'
  },
  error:{ color: "red", textAlign: "center", marginTop: 15 },
  shadowPro:{
    shadowColor: "#00000026",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },
  boxShadow: {
    shadowColor: "#0000001f",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 0,
    flex: 1,
    flexDirection: "column",
    height: "100%"
  },
  boxShadowC: {
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8
  },

  margin: {
    margin: 20
  },
  padding: {
    padding: 7
  },
  paddingBotton: {
    paddingBottom: 10
  },
  textAlignCenter: {
    textAlign: "center"
  },
  greenText: {
    color: "#31A514"
  },
  geryText: {
    color: "#737373"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
