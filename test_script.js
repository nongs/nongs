/*** 구현 함수 : *카테고리 탭 리스트 생성 ***/

function CategoryList(props) {
  const categorys = this.props.category;
  const categoryItem = categorys.map((category, index) =>
    <li key={index} tabIndex="0">
      {category.tab_name}
    </li>
  );
  render() {
    return <ul>{categoryItem}</ul>;
  }
}

ReactDOM.render(
  <CategoryList category={getData.result} />,
  document.getElementById('contentArea')
);
