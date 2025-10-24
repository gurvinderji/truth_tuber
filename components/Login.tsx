"use client";
import { Button, Card, Divider, Form, Image, Input } from "antd";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import Link from "next/link";

interface LoginFormInterface {
  email: string;
  password: string;
}

const Login = () => {
  const login = (values: LoginFormInterface) => {
    console.log(values);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <Card hoverable className="w-[450px] animate__animated animate__fadeIn">
        <div className="flex flex-col items-center">
          <Image src="/images/logo.PNG" width={150} height={100} alt="logo" />
          <Card.Meta
            title={<h1 className="text-lg"> Start Video Uploading</h1>}
            description="Login to your account"
            className="text-center"
          />
          <Divider />
          <Form className="w-full" layout="vertical" onFinish={login}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email id" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="password" size="large" placeholder="************" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                type="primary"
                className="!bg-[#2266FF]"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">I don`t have an account ?</p>
            <Link href="/signup" className="font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
