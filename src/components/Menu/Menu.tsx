import { Menu, Badge, Avatar  } from 'antd';
import { Link } from "react-router-dom";
import {  ShoppingCartOutlined } from '@ant-design/icons';

import './index.scss';

export interface MenuProps {
    numberProduct: string;
    selectedKeys: string;
    handleClick?: () => void;
}

const  MenuComponent = ({
    numberProduct,
    selectedKeys,
    handleClick,
    }:MenuProps) =>  {
        return (
            <Menu className="antd-menu" onClick={handleClick} selectedKeys={[selectedKeys]} mode="horizontal">
                <Menu.Item key="product">
                    <Link to="/">Products</Link>
                </Menu.Item>
                <Menu.Item key="cart" className="icon-cart">
                <Link to="/carts">
                    <Badge count={numberProduct}>
                        <Avatar shape="square" icon={<ShoppingCartOutlined  />} />
                    </Badge>
                </Link>
                </Menu.Item>   
            </Menu>
        );
}

export default MenuComponent;
