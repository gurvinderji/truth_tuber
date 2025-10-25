"use client";
import { Button, Card, Divider, Form, Input } from "antd";
import Image from "next/image";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import Link from "next/link";
import { GoogleCircleFilled } from "@ant-design/icons";
const signup = (values: any) => {
  console.log(values);
};

const Signup = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <Card hoverable className="w-[450px] animate__animated animate__fadeIn">
        <div className="flex flex-col items-center">
          <Image src="/images/logo.PNG" height={100} width={100} alt="logo" />
          <Card.Meta
            title={<h1 className="text-lg">Create an account</h1>}
            description="Register now"
            className="text-center"
          />
          <Divider />
          <Form className="w-full " layout="vertical" onFinish={signup}>
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Fullname" size="large" />
            </Form.Item>
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
              rules={[{ required: true }]}
            >
              <Input placeholder="*********" size="large" type="password" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                type="primary"
                className="!bg-[#2266FF]"
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
          <Divider />
          <Button
            icon={<GoogleCircleFilled className="!mt-1" />}
            size="large"
            className="!mb-3 !w-full"
            danger
            type="primary"
          >
            Sign up with Google
          </Button>

          <div className="flex items-center gap-2">
            <p className="text-gray-500">I don`t have an account ?</p>
            <Link href="/login" className="font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </Card>
      Signup
    </div>
  );
};

export default Signup;
