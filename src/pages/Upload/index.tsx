import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import styles from "./index.module.scss";
import FileInput from "@components/FileInput";
import EXIF from "exif-js";
import AuthButtonWrap from "@components/AuthButtonWrap";
import { addPhoto } from '@request'
import { Photo } from "@types";
const Upload = () => {
  const [values, setValues] = useState({})
  const url = "";
  EXIF.getData(url, () => { });
  const [formObj] = Form.useForm();
  const handleFinsh = async (values: Photo) => {
    setValues(values)

    await formObj.validateFields()
    const res: any = await addPhoto(values)

    message.success(res.msg, 1.5)
  }
  return (
    <div className={styles.container}>
      上传
      <Form
        layout={"vertical"}
        labelWrap
        labelCol={{ span: 6 }}
        onFinish={
          handleFinsh
        }
        form={formObj}
      >
        <Form.Item label={"图片"} name={"image"}>
          <FileInput></FileInput>
        </Form.Item>
        <Form.Item
          label={"照片名称"}
          name={"photoName"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"照片url"}
          name={"photoUrl"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"拍摄日期"}
          name={"time"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"拍摄地址"}
          name={"address"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"备注"}
          name={"remark"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={"标签"}
          name={"tag"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item>
        {/* <Form.Item
          label={"上传日期"}
          name={"uploadTime"}
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input></Input>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 8 }}>
          <div className={styles.submit_row}>
            <Button
              htmlType="submit"
              type="primary"
            >
              提交
            </Button>

            <Button htmlType="reset">重置</Button>
          </div>
        </Form.Item>
      </Form>
      {
        Object.keys(values).length ?
          <div>
            {values.a.length}
          </div> : null


      }
    </div>
  );
};
export default Upload;
