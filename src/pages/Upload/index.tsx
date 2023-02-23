import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./index.module.scss";
import FileInput from "@components/FileInput";
import EXIF from "exif-js";
import AuthButtonWrap from "@components/AuthButtonWrap";

const Upload = () => {
  const url = "";
  EXIF.getData(url, () => {});
  const [formObj] = Form.useForm();
  return (
    <div className={styles.container}>
      上传
      <Form
        layout={"vertical"}
        labelWrap
        labelCol={{ span: 6 }}
        onFinish={() => {
          formObj.validateFields();
        }}
        form={formObj}
      >
        <Form.Item label={"图片"} name={"image"}>
          <FileInput></FileInput>
        </Form.Item>
        <Form.Item
          label={"照片名称"}
          name={"name"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"拍摄日期"}
          name={"photoTime"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"上传日期"}
          name={"uploadTime"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8 }}>
          <div className={styles.submit_row}>
              <Button
                onClick={() => {
                  console.log("click");
                }}
                type="primary"
              >
                提交
              </Button>

            <Button htmlType="reset">重置</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Upload;
