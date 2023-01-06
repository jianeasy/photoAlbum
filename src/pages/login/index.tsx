import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './index.module.scss';
import strings from '@/strings'
import { login } from '@/request';
import { loginFromData } from '@/types';


export default () => {
    const [form] = Form.useForm()
    const handleFinsh = async (values:loginFromData)=>{
      const data = await login(values)
      
    }
    return <div className={styles.container}>
        <Form form={form} onFinish={handleFinsh}>
            <Form.Item name={'userName'} required>
                <Input></Input>
            </Form.Item>
            <Form.Item name={'password'} required >
                <Input></Input>
            </Form.Item>
            <Form.Item>
                <div>

                <Button onClick={()=>{
                    form.submit()
                }}>{strings.login}</Button>
                </div>
               
            </Form.Item>
        </Form>
    </div>
}