import React from 'react';
import data from './data/combinedCategoryLinksData.json'
import NavBar from './components/NavBar' ;
import HeaderText from './components/HeaderText' ;

/* ========================================= */
function FnGetAllCategories () {
  const categoryList = [] ;
  for (let index in Object.entries(data)) {
    const d = data[index]['CATEGORY'] ; 
    categoryList.push(d);
  }
  return categoryList ; 
}
/////////////
function FnGetSingleCategoryData(singleCategoryName) {
  let elementListFull = '' ; 
  for(var i = 0 ; i < data.length ; i++){
      let singleCategoryOriginal = data[i]['CATEGORY'] ; 
      if( singleCategoryOriginal.toLowerCase() === singleCategoryName.toLowerCase() ){
          let myVar = data[i] ; 
          let elementList = '<li><a href="' + myVar.URL + '">' + myVar.ANCHORTEXT + '</a></li>' ;
          elementListFull = elementListFull + elementList ;
          // console.log(elementList) ; 
      }
  }
  return ('<ul>' + elementListFull + '</ul>');
}
/////////////
function printAllCategoryData(categoryList_unique) {
  let printSingleCategoryData = ''  ;
  let printCard = `<div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    </div>
                  </div>` ;

  for (const singleCategoryName of categoryList_unique) {
    console.log(singleCategoryName);
    printSingleCategoryData = printSingleCategoryData + '<h3>' + singleCategoryName + '</h3>' + FnGetSingleCategoryData(singleCategoryName) ;
    console.log(printSingleCategoryData);
  }
  return printSingleCategoryData ; 
}
/* ========================================= */

const App = () => {
  const categoryList = FnGetAllCategories() ;
  const categoryList_unique = [...new Set(categoryList)];
  console.log(categoryList);
  console.log(categoryList_unique);
  const printAllCategoryDataValue = printAllCategoryData(categoryList_unique) ; 
  console.log(typeof(printAllCategoryDataValue)) ; // should be string type

  return (
    <div className="container">
      <NavBar />
      <HeaderText />
      <div className="row">
        <div dangerouslySetInnerHTML={{ __html: printAllCategoryDataValue }} />
      </div>
    </div>
  );
} ;

export default App;
