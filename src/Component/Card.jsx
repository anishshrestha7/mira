const Card = ({ image, title, price, oldPrice, gridArea }) => {
  return (
    <div 
      className="relative bg-[#F6F6F6]" 
      style={{ gridArea: gridArea }}
    >
      <div>
        <img src={image}  alt={title}  className="" />
      </div>
      <div className="absolute bottom-4 ps-6">
        <h3 className="text-gray-600 hover:translate-x-[6px] duration-300 ease-in-out">
          {title}
        </h3>
        <div className="gap-3 cursor-text">
          <span className="">${price}</span>
          {oldPrice && (
            <del className="text-gray-600 ps-2">${oldPrice}</del>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
