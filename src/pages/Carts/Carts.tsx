import React, { useEffect } from "react";
import { Row, Empty  } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchListProduct, addToCart, updateListProduct } from "../../store/Products/actions";
import { ProductProps } from '../../store/Products/type';
import CardComponent from "../../components/CardInfo";
import Menu from "../../components/Menu/Menu";

const Cart = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.products?.data);
  const carts = useSelector((state: any) => state.products?.carts);
  const amount = useSelector((state: any) => state.products?.amount);

  useEffect(() => {
    dispatch(fetchListProduct());
  }, [dispatch]);

  const handleSelectMenu = () => {
    console.log("select menu");
  };

  const handleRemoveItem = (id: string | undefined) => {
    let cartsSend: ProductProps[] | any = [] ;
      cartsSend = carts.map((item: ProductProps, index: number) => {
        if (item.id === id) return cartsSend.splice(index, 1);
        return item;
      }).filter((item: ProductProps) => item.id);

      let totalAmount:number = 0 ;

      cartsSend.map((item: ProductProps) => {
        return totalAmount +=(item.price * item.quality);
      })
  
      dispatch(addToCart({data: cartsSend, amount:  Math.floor(totalAmount)}));


    const product = carts.find((item: ProductProps) => item.id === id);
    const currentProduct = productList.map((item:ProductProps) => {
      if (item.id === product.id)
      return { ...item, quality: item.quality + product.quality };
      return item;
    });

    dispatch(updateListProduct(currentProduct));
  };

  return (
    <>
      <Menu
        numberProduct={carts.length}
        selectedKeys="product"
        handleClick={handleSelectMenu}
      />
      <div className="site-card-border-less-wrapper">
        {carts.length > 0 ? (
          <>
            <Row gutter={24} justify="center">
              {carts.map((item: any) => {
                    return (
                      <CardComponent
                        key={item.id}
                        price={item.price}
                        description={item.description}
                        imageSrc={item.image}
                        id={item.id}
                        name={item.name}
                        quality={item.quality}
                        onClickCart={handleRemoveItem}
                      />
                    );
                  })
              }
            </Row>
            <Row gutter={16} justify="end">
              Total amount for Payment: ${amount}
            </Row>
         </>
        ) : (
          <div className="emty-screen"><Empty  description="No item" /></div>
        )}
      </div>
    </>
  );
};

export default Cart;
