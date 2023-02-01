import React from "react";
import { Form, Input, Button, message } from "antd";
import styles from "./index.module.scss";
import strings from "@strings";
import { login } from "@request";
import { loginFromData } from "@types";

export default () => {
  const [form] = Form.useForm();
  const handleFinsh = async (values: loginFromData) => {
    const res: any = await login(values);
    const { data, token, success } = res;
    debugger
    if (success) {
      message.success("login successfully", 1.5);
      window.localStorage.setItem("token", `${token}`);
    } else {
      message.error("login faild", 1.5);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form form={form} onFinish={handleFinsh} validateTrigger={["onChange"]}>
          <Form.Item name={"userName"} required>
            <Input placeholder={strings.userName}></Input>
          </Form.Item>
          <Form.Item name={"password"} required>
            <Input placeholder={strings.password}></Input>
          </Form.Item>
          <Form.Item>
            <div>
              <Button htmlType={"submit"}>{strings.login}</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
