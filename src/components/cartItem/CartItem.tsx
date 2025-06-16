import Button from "../button/Button";

const CartItem = () => {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-28"
        src="https://media.istockphoto.com/id/1427276149/vector/abstract-arrow-direction-technology-background.jpg?s=612x612&w=0&k=20&c=KQKxMDhnPGq1-idJW4b67ZgJTeZeMsIp3B9R4PTgeWE="
        alt=""
      />

      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>
        <div className="mt-2">
          <Button className="mr-2" variant="danger">
            remove
          </Button>
          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
