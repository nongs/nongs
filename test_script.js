/*** 구현 함수 : *카테고리 탭 리스트 생성 ***/
let getData;

const renderData = (data) => {
  const e_c = React.createElement;

  function CategoryList(props) {
    const categorys = props.category;
    const categoryItem = categorys.map((category, index) =>
      e_c('li', {key: index}, category.tab_name)
    );

    return e_c('ul', null, categoryItem);
  }

  ReactDOM.render(
    e_c(CategoryList, {category: data.result}, null),
    document.getElementById('contentArea')
  );
}

const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getData = JSON.parse(this.responseText);
        renderData(getData);
        console.log("Json parsed data is: " + JSON.stringify(getData));
       }
    };
xmlhttp.open("GET", "test_data.json", true);
xmlhttp.send();
