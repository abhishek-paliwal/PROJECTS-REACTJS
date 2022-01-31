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
  let printAllCategoryData = ''  ;
  let printSingleCategoryData_header = '<div class="row"><div class="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4"><div class="card text-dark bg-light mb-3">'  ;
  let printSingleCategoryData_footer = '</div></div></div>'  ;
  //
  for (const singleCategoryName of categoryList_unique) {
    console.log(singleCategoryName);
    let printSingleCategoryData = FnGetSingleCategoryData(singleCategoryName)  ;
    let singleCategoryNamePrint = '<div class="card-header">' + singleCategoryName + '</div>' ;
    printAllCategoryData = printAllCategoryData + printSingleCategoryData_header + singleCategoryNamePrint + '<div class="card-body">' + printSingleCategoryData + '</div>' + printSingleCategoryData_footer ;
  }
  //
  console.log(printAllCategoryData) ;
  return printAllCategoryData ; 
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
    <div className="section">
      <NavBar />
      <HeaderText />
      <div className="row">
        <div dangerouslySetInnerHTML={{ __html: printAllCategoryDataValue }} />
      </div>
    </div>
  );
} ;

export default App;
