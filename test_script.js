/*** 구현 함수 : *카테고리 탭 리스트 생성 ***/

const e_c = React.createElement;

function CategoryList(props) {
  const categorys = props.category;
  const categoryItem = categorys.map((category, index) =>
    e_c('li', {key: index}, category.tab_name)
  );

  return e_c('ul', null, categoryItem);
}

ReactDOM.render(
  e_c(CategoryList, {category: getData.result}, null),
  document.getElementById('contentArea')
);
