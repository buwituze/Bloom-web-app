function Message() {
  const item = ["item1", "item2", "item3"];
  //JSX:JavaScript XML
  item.map((item) => <li>{item}</li>);
  return (
    <div>
      <h1>Lists</h1>
      <ul>
        <li className="listgroup">list</li>
        <li className="listgroup">list1</li>
      </ul>
    </div>
  );
}
export default Message;
