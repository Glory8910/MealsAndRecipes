import { Button, Form, Input, Row, Col, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'

import {  useDispatch } from 'react-redux';


function CheckOut() {
    
    const [userDetails,setUserDetails]=useState()
    
    const [redirect,setRedirect]=useState()

  
    const phoneNumberRules = [
        { required: true, message: 'Please enter your phone number' },
        { pattern: /^[0-9]*$/, message: 'Please enter a valid phone number' },
      ];

      const emailRules = [
        { required: true, message: 'Please enter your email' },
        { type: 'email', message: 'Please enter a valid email' },
      ];
    
    const onFinish = (values) => {
        
        addUser(values)
        setUserDetails(values)
        setRedirect(true)
       
    };

   
    const dispatch = useDispatch();
  
    const addUser = (userDetails) => {
      dispatch({ type: 'ADD_USER',payload:userDetails });
    };
  

    if(redirect){
        return(<Navigate  to={{

            pathname: `/purchase`,

        }}></Navigate>)
    }

    
    return (
        <>
            <Row gutter={16} justify="center" align='middle'>
                <Col span={24} justify="space-around" align='middle'>
                    <Typography  >
                        <Typography.Title level={4}>Fill Your Details </Typography.Title>
                    </Typography>
                    <Form onFinish={onFinish} style={{maxWidth:800}}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                          
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email ID"
                            name="email"
                            rules={emailRules}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please enter your address' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                           
                            rules={phoneNumberRules}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Purchase
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default CheckOut