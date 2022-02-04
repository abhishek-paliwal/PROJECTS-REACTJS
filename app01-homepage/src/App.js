import React from 'react';
import data from './data/data_out/combinedCategoryLinksData.json'
import NavBar from './components/NavBar' ;
import HeaderText from './components/HeaderText' ;
import SearchBarAndResults from './components/SearchBarAndResults' ;

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
  // Getting data for single category 
  let mySingleCategoryItemsObj = [] ;
  for(var i = 0 ; i < data.length ; i++){
      let singleCategoryOriginal = data[i]['CATEGORY'] ; 
      if( singleCategoryOriginal.toLowerCase() === singleCategoryName.toLowerCase() ){
        mySingleCategoryItemsObj.push(data[i]) ;
        //console.log(data[i]) ; 
      }
  }
  // Sorting the data based upon anchor text
  let mySingleCategoryItemsObj_sorted = mySingleCategoryItemsObj.sort(function(a, b) {
    var valA = a.ANCHORTEXT.toUpperCase(); // ignore case first
    var valB = b.ANCHORTEXT.toUpperCase(); // ignore case first
    if (valA < valB) { return -1; }
    if (valA > valB) { return 1; }    
    return 0; // values must be equal
  });  
  //console.log(mySingleCategoryItemsObj_sorted);
  // Create final data to print
  let elementListFull = '' ; 
  for (const myVar of Object.values(mySingleCategoryItemsObj_sorted)) { 
    //console.log( myVar.ANCHORTEXT + ' = ' + myVar.URL) ;
    let elementList = '<li><a target="_blank" rel="noopener noreferrer" href="' + myVar.URL + '">' + myVar.ANCHORTEXT + '</a></li>' ;
    elementListFull = elementListFull + elementList ;
  } ;
  // Return final sorted data for this category
  return ('<ol>' + elementListFull + '</ol>');
}

/////////////
function printAllCategoryData(categoryList_unique) {
  let printAllCategoryData = ''  ;
  let printSingleCategoryData_header = '<div class="col-sm-12 col-xs-12 col-md-6 col-lg-3 col-xl-3"><div class="card text-dark bg-light mb-3">'  ;
  let printSingleCategoryData_footer = '</div></div>'  ;
  //
  for (const singleCategoryName of categoryList_unique) {
    //console.log(singleCategoryName);
    let printSingleCategoryData = FnGetSingleCategoryData(singleCategoryName)  ;
    let singleCategoryNamePrint = '<div class="card-header">' + singleCategoryName + '</div>' ;
    printAllCategoryData = printAllCategoryData + printSingleCategoryData_header + singleCategoryNamePrint + '<div class="card-body">' + printSingleCategoryData + '</div>' + printSingleCategoryData_footer ;
  }
  //
  //console.log(printAllCategoryData) ;
  return printAllCategoryData ; 
}
/* ========================================= */

const App = () => {
  const categoryList = FnGetAllCategories() ;
  const categoryList_unique = [...new Set(categoryList)];
  const printAllCategoryDataValue = printAllCategoryData(categoryList_unique) ; 
  //console.log(categoryList);
  //console.log(categoryList_unique);
  //console.log(typeof(printAllCategoryDataValue)) ; // should be string type

  return (
    <div className="section">
      <NavBar />
      <HeaderText />
      <SearchBarAndResults />
      <hr />
      <div className="row" dangerouslySetInnerHTML={{ __html: printAllCategoryDataValue }} />
    </div>
  );
} ;

export default App;
