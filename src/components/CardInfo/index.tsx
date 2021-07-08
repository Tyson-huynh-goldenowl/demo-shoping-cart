import React from "react";
import { Card, Row, Col, Image } from "antd";
import Button from "../Button/Button";
import "./index.scss";

export interface CardProps {
  description: string;
  price: number;
  imageSrc: string;
  id?: string;
  name: string;
  quality: number;
  onClickCart: (id: string | undefined) => void;
}

const CardInfo = ({
  description,
  price,
  quality,
  imageSrc,
  id,
  name,
  onClickCart,
}: CardProps) => {
  
  return (
    <Card className="antd-cardInfo-product">
      <Row gutter={16}>
        <Col className="gutter-row" sm={6}>
          <Row>
            <Col sm={12} xs={24}>
              <Image width={"100%"} src={imageSrc} />
            </Col>
            <Col sm={12} xs={24} className="cart-info">
              <div className="antd-cartInfo-label">Product name</div>
              <div className="antd-cartInfo--name">{name}</div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" sm={16}>
          <Row>
            <Col sm={6} className="cart-info">
              <div className="antd-cartInfo-label">Description</div>
              <div className="antd-cartInfo-des">{description}</div>
            </Col>
            <Col sm={6} xs={24} className="cart-info">
              <div className="antd-cartInfo-label">Quality</div>
              <div className="antd-cartInfo-des">{quality}</div>
            </Col>
            <Col sm={6} xs={24} className="cart-info">
              <div className="antd-cartInfo-label">Price</div>
              <div className="antd-cartInfo-des">{price}</div>
            </Col>
            <Col sm={6} xs={24} className="cart-info">
              <div className="antd-cartInfo-label">Line total</div>
              <div className="antd-cartInfo-des">{`${price * quality}`}</div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" sm={2} xs={24}>
          <Button
            label="Remove"
            onClick={() => onClickCart(id)}
            className="button-cardInfo"
          />
        </Col>
      </Row>
     
    </Card>
  );
};

export default CardInfo;
