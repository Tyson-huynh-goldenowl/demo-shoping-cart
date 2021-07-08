import React, { useEffect } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchListProduct, addToCart, updateListProduct  } from "../../store/Products/actions";
import {ProductProps} from '../../store/Products/type';
import CardComponent from "../../components/Card";
import Menu from "../../components/Menu/Menu";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.products?.data);
  const carts = useSelector((state: any) => state.products?.carts);

  useEffect(() => {
    if(productList.length === 0) {
      dispatch(fetchListProduct());
    }
  }, [dispatch, productList]);

  const handleSelectItem = (id: string | undefined) => {
    let cartsSend: ProductProps[] | any = [] ;
    const product = productList.find((item: ProductProps) => item.id === id);
    if (carts.length === 0) {
      cartsSend.push({ ...product, quality: 1 });
    } else {
      const haveItem = carts.findIndex((item: ProductProps) => item.id === product.id);
      if (haveItem !== -1) {
        cartsSend = carts.map((item: ProductProps) => {
          if (item.id === product.id)
            return { ...item, quality: item.quality + 1 };
          return item;
        });

      } else {
        cartsSend = [...carts, { ...product, quality: 1 }];
      }
    }

    let totalAmount:number = 0 ;

    cartsSend.map((item: ProductProps) => {
      return totalAmount += item.price * item.quality;
    })

    dispatch(addToCart({data: cartsSend, amount:  Math.floor(totalAmount)}));

    const currentProduct = productList.map((item:ProductProps) => {
      if (item.id === product.id)
      return { ...item, quality: item.quality - 1 };
      return item;
    });

    dispatch(updateListProduct(currentProduct));
   
  };

  return (
    <>
      <Menu
        numberProduct={carts.length}
        selectedKeys="product"
      />
      <div className="site-card-border-less-wrapper">
        <Row gutter={24} justify="center">
          {productList
            ? productList.map((item: any) => {
                return (
                  <CardComponent
                    key={item.id}
                    price={item.price}
                    description={item.description}
                    imageSrc={item.image}
                    id={item.id}
                    name={item.name}
                    quality={item.quality}
                    onClickCart={handleSelectItem}
                  />
                );
              })
            : null}
        </Row>
      </div>
    </>
  );
};

export default Products;
