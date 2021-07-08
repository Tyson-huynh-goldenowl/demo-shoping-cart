import React from "react";
import { Card, Row, Col, Image  } from 'antd';
import Button from '../Button/Button';
import './index.scss';

export interface CardProps {
  description: string;
  price: string;
  quality: number;
  imageSrc: string;
  id?: string;
  name:string;
  onClickCart: (id:string | undefined) => void ;
}

const CardComponent = ({
  description,
  price,
  imageSrc,
  id,
  name,
  quality,
  onClickCart,
}: CardProps) => {

  return (
    <Card style={{ width: 300, height:350, margin: 15 }} className="antd-card-product">
        <Row gutter={16}>
            <Col className="gutter-row" span={14}>
                <Image
                    width={'100%'}
                    src={imageSrc}
                />
            </Col>
            <Col className="gutter-row" span={10}>
               
                <div className="antd-product-price">
                  <div className="antd-product-label">Price:</div>
                  <div>${price}</div>
                  </div>
                <div className="antd-product-quality">
                  <div className="antd-product-label">Quality:</div>
                  <div>{quality}</div>
                </div>
            </Col>
        </Row>
        <Row justify="start" >
            <Col className="gutter-row" span={24}>
              <div className="antd-product--name">{name}</div>
            </Col>
        </Row>
        <Row justify="center" >
            <Col className="gutter-row" span={24}>
                <div className="antd-product-des">{description}</div>
            </Col>
        </Row>
        <Button label="Add to Cart" onClick={() => onClickCart(id)}  className="btn-card"/>
    </Card>
  );
};

export default CardComponent;
