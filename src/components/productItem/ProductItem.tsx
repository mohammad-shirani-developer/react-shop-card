const ProductItem = () => {
  return (
    <div className="shadow border rounded pb-4">
      <img
        className="rounded-t"
        src="https://media.istockphoto.com/id/1427276149/vector/abstract-arrow-direction-technology-background.jpg?s=612x612&w=0&k=20&c=KQKxMDhnPGq1-idJW4b67ZgJTeZeMsIp3B9R4PTgeWE="
        alt=""
      />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
